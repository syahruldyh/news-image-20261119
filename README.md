# THE WORLD'S NEWS IN ONE PICTURE — Thursday 19 November 2026

One image summing up the world's news of Thursday 19 November 2026:
48 stories from 6 continents on a single newspaper front page —
3 big headlines, 15 stories in the middle, a "Where it happened"
world map with numbered pins, and an also-on list, all drawn as
original AI illustrations.

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/syahruldyh/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/syahruldyh/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

[View the competition on make.fun](https://make.fun/bounty/news-image-20261119)

## The day it sums up

The big three: the first-ever Trump–Xi–Putin trilateral summit in
Shenzhen, the ICJ ruling that Myanmar committed genocide against the
Rohingya, and Ukraine's third strike on the Kerch Bridge in a week.
The middle rows carry Bangladesh's turmoil, the Houthi missile that
reached Riyadh, the expanded Iran blockade, Anthropic's record
$83bn IPO, the $190.4m Van Gogh record, the COP31 draft that dropped
every fossil-fuel word, and nine more. Contested claims — like the
reported tanker fires in Hormuz — are marked as claims on the page.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the
finished 1024×1024 front page — to the output directory as
`entry.png`. It needs no network and writes identical bytes on
every run.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
