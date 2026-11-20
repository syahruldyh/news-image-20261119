# THE WORLD'S NEWS IN ONE PICTURE — Thursday 19 November 2026

One image summing up the world's news of Thursday 19 November 2026:
50 stories, 7 regions, 11 pictured, on a single newspaper front
page — 3 lead stories and 8 more pictured cards, a "Where it
happened" world map with numbered pins, an also-on list running
from story 12 to story 50, a UTC timeline of the day, and a
date-check strip separating the day's news from other days'.

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/syahruldyh/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/syahruldyh/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

[View the competition on make.fun](https://make.fun/bounty/news-image-20261119)

## The day it sums up

The three leads: the first-ever Trump–Xi–Putin trilateral summit
in Shenzhen, the World Court ruling that Myanmar committed
genocide against the Rohingya, and the COP31 draft that drops
fossil fuels and sets a $120bn aid goal. The pictured cards carry
Berlin's "Article 5-like" cover offer for Kyiv, the Houthi missile
that damaged Riyadh's PIF tower, Ukraine hitting the Crimea bridge
again, GTA VI going on sale after 13 years, Anthropic's +17% Nasdaq
debut, Cyclone Akvan nearing Odisha, Denmark's 109–0 Arctic pact
vote, and the Hormuz energy crisis. Reported-but-unconfirmed items
are tagged REPORTED or FORECAST on the page, and the date-check
strip names the nearby stories that are NOT this day's news.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the
finished 1024×1024 front page — to the output directory as
`entry.png`. It needs no network and writes identical bytes on
every run.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
