#!/usr/bin/env node
// Skill router. Runs on UserPromptSubmit, before the model sees the message.
//
// WHY THIS EXISTS
// Project instructions that say "load the right skill first" get skipped,
// because following them is left to the model. This is a hook, so the harness
// injects the instruction and there is nothing to forget.
//
// It only ever ADDS a line of context. It never blocks a prompt, and any error
// exits quietly so a broken map cannot stop anyone typing.
//
// Edit map.json to change what fires. Project specific rules and file paths go
// in map.local.json, either next to this file or in the project at
// .claude/skill-router/map.local.json. Local rules merge into the shared ones
// by name, so a project adds its own reference files without forking the map.

const fs = require('fs');
const path = require('path');

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (_) {
    return null;
  }
}

function merge(base, local) {
  if (!local || !Array.isArray(local.rules)) return base;
  for (const lr of local.rules) {
    const target = base.rules.find((r) => r.name === lr.name);
    if (!target) {
      base.rules.push(lr);
      continue;
    }
    for (const key of ['words', 'skills', 'files']) {
      for (const v of lr[key] || []) {
        target[key] = target[key] || [];
        if (!target[key].includes(v)) target[key].push(v);
      }
    }
  }
  if (local.maxSkills) base.maxSkills = local.maxSkills;
  return base;
}

function main() {
  let raw = '';
  try {
    raw = fs.readFileSync(0, 'utf8');
  } catch (_) {
    return;
  }

  // UserPromptSubmit sends { prompt: "..." }. Fall back to the whole payload so
  // a renamed field degrades to "matches too much" rather than "matches nothing".
  let text = '';
  try {
    const data = JSON.parse(raw);
    text = data.prompt || data.user_prompt || data.message || raw;
  } catch (_) {
    text = raw;
  }
  if (typeof text !== 'string' || !text.trim()) return;

  const hay = text.toLowerCase();
  const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

  const map = readJson(path.join(__dirname, 'map.json'));
  if (!map || !Array.isArray(map.rules)) return;
  merge(map, readJson(path.join(__dirname, 'map.local.json')));
  merge(map, readJson(path.join(projectDir, '.claude/skill-router/map.local.json')));

  const maxSkills = map.maxSkills || 7;
  const hit = [];
  const skills = [];
  const files = [];

  for (const rule of map.rules) {
    const matched = (rule.words || []).some((w) => {
      const word = String(w).toLowerCase().trim();
      if (!word) return false;
      // Whole word or phrase only, so "post" does not fire on "postgres".
      const esc = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('(^|[^a-z0-9])' + esc + '([^a-z0-9]|$)').test(hay);
    });
    if (!matched) continue;

    hit.push(rule.name);
    for (const s of rule.skills || []) if (!skills.includes(s)) skills.push(s);
    for (const f of rule.files || []) {
      if (files.includes(f)) continue;
      try {
        if (fs.existsSync(path.join(projectDir, f))) files.push(f);
      } catch (_) {}
    }
  }

  if (!skills.length) return;
  const picked = skills.slice(0, maxSkills);

  let line =
    'Skill router matched: ' + hit.join(', ') + '. ' +
    'Load these skills with the Skill tool BEFORE writing or building anything ' +
    'for this request, and read their references/ files, not just the SKILL.md: ' +
    picked.join(', ') + '.';
  if (files.length) line += ' Read these too: ' + files.join(', ') + '.';
  line +=
    ' If a skill is genuinely not relevant here, say so in one line rather than ' +
    'loading it.';

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'UserPromptSubmit',
      additionalContext: line,
    },
    systemMessage: 'Skills: ' + picked.join(', '),
    suppressOutput: true,
  }));
}

try {
  main();
} catch (_) {
  // Never break the prompt.
}
