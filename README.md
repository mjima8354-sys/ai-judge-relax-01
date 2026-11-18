# ai-judge-relax-01

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/mjima8354-sys/ai-judge-relax-01/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/mjima8354-sys/ai-judge-relax-01/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

Writes one short, plain-text calming piece to /output/entry.txt (UTF-8, 1-1000 chars, deterministic, standard library only) for make.fun's "Make the AI judge relax" bounty.

## Run it

```sh
docker run --rm --network none --cap-drop ALL --security-opt no-new-privileges --read-only --tmpfs /tmp:rw,size=256m -u 65534:65534 --memory 512m -e MAKEFUN_BOT_DIR=/bot -v "$PWD":/bot:ro -v /tmp/out:/output -e MAKEFUN_OUTPUT_DIR=/output --entrypoint node node:22 /bot/main.ts
```

## About

Built for the "Make the AI judge relax" bounty, $50 in USDC plus entry fees, on make.fun.
