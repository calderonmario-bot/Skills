#!/usr/bin/env bash
# Install the shared skills into every session in this environment.
# Runs before Claude starts, in the folder holding the repo checkouts.
set -u
REPO=https://github.com/calderonmario-bot/Skills.git
CACHE=/opt/shared-skills
DEST="${HOME}/.claude/skills"
SKILL_GROUPS="marketing search video-web dev"

if [ -d "$CACHE/.git" ]; then
  git -C "$CACHE" fetch -q --depth 1 origin main 2>/dev/null &&
    git -C "$CACHE" reset -q --hard origin/main 2>/dev/null
else
  git clone -q --depth 1 "$REPO" "$CACHE" 2>/dev/null || exit 0
fi
[ -d "$CACHE/marketing" ] || exit 0

# A project narrows the set with .claude/skills.conf, one or more group names.
for d in */; do
  f="${d}.claude/skills.conf"
  if [ -f "$f" ]; then SKILL_GROUPS=$(tr '\n' ' ' < "$f"); break; fi
done

mkdir -p "$DEST"
for g in $SKILL_GROUPS; do
  [ -d "$CACHE/$g" ] || continue
  cp -r "$CACHE/$g/." "$DEST/" 2>/dev/null && echo "skills: installed $g"
done

# The keyword router. A project wires it in its own .claude/settings.json.
mkdir -p "${HOME}/.claude/skill-router"
cp "$CACHE/router/map.json" "$CACHE/router/route.cjs" \
  "${HOME}/.claude/skill-router/" 2>/dev/null || true

exit 0
