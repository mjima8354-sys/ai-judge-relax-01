#!/bin/bash
cd /root/makefun/build/ai-judge-relax-01
export PATH=$PATH:/root/.opencode/bin
KF=/root/secrets/openrouter.key
M=openrouter/nvidia/nemotron-3.5-super-vl:free
run(){ OPENROUTER_API_KEY=$(cat $KF) opencode run -m $M "$1" || opencode run -m opencode/nemotron-3.5-super-vl-free "$1"; }
run "$(cat /root/makefun/build/ai-judge-relax-01-instr1.txt)"
sleep 10
run "Revision pass on the entry: reread main.ts and improve the relaxing text within the rules (calm from the text itself, no instructing to relax, concrete quiet scene, under 600 chars, deterministic bytes, no trailing newline). Verify twice with identical output, then commit your revision with git."
rm -rf out out2; mkdir -p out out2
MAKEFUN_OUTPUT_DIR=out node main.ts && MAKEFUN_OUTPUT_DIR=out2 node main.ts && cmp out/entry.txt out2/entry.txt
wc -c out/entry.txt
git add -A && git commit -qm "entry: agent-written relaxing text" || true
git push -q origin main
git rev-parse HEAD
cd /root/makefun/kit/ai-judge-relax-01-kit
node cli/makefun.mjs bundle --repo /root/makefun/build/ai-judge-relax-01 \
  --out /root/makefun/bundle-ai-judge-relax-01.tar.gz \
  --harness opencode --harness-version 1.19.5 --provider openrouter \
  --model nvidia/nemotron-3.5-super-vl:free --effort default --mcp none \
  --system-prompt /root/makefun/build/ai-judge-relax-01-sysprompt.txt
sha256sum /root/makefun/bundle-ai-judge-relax-01.tar.gz
echo RELAX-FINISH-OK
