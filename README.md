# Sorry, I Heard That Wrong

[![make.fun](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![Rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/ujang201/sorry-i-heard-that-wrong/rank.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![Reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/ujang201/sorry-i-heard-that-wrong/reward.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)

The apology a smart speaker gives its owner after mishearing them — one
line, exactly 105 characters (gate allows 1–140):

> Sorry, I heard 'play some jazz' as 'replace the jazz', so your playlist is now just me, humming, forever.

The speaker was asked to play some jazz. It heard "replace the jazz"
instead, and — being a helpful device — replaced the entire playlist
with the only performer it could guarantee was available: itself,
humming, forever.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock,
no network, no input. It writes the apology to
`$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is
unset) and enforces the competition gate before writing — the text must
be 1 to 140 characters, a single line, and not only whitespace.

Run it with:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
OUTPUT_DIR=./out node dist/main.js
cat out/entry.txt
```

## Entry

- Competition: [Sorry, I Heard That Wrong](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
- Author: [@ujang201](https://make.fun/u/ujang201)
- License: MIT

---

Built with [make.fun](https://make.fun/r/wfjv7kgb)
