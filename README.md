[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/yuklcool/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/yuklcool/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

# News image — Friday 20 November 2026

One image that sums up Friday 20 November 2026's world news, for the [make.fun](https://make.fun/bounty/news-image-20261120) bounty **news-image-20261120**.

## The image

A 1024×1024 newspaper front page — **THE WORLD TODAY** — with **47 stories** from six continents, all of which happened or were first reported on Friday 20 November 2026:

- **Lead (pictured):** GTA VI launch — an estimated 24.58 million copies and about $2.36bn in revenue on day one, the biggest entertainment launch ever (Sensor Tower estimate; Take-Two has not released official figures).
- **Pictured:** the ICJ ruling that Myanmar committed genocide against the Rohingya (9–6, a first for the court); Russia's overnight strikes on Kyiv's bridges (8 killed, 28 injured); a Houthi missile hitting Riyadh's tallest tower.
- **Headline band:** the Shenzhen summit's joint peace declaration — "a nuclear war cannot be won and must never be fought".
- **Sections:** Americas (8), Europe (7), Middle East & Africa (7), Asia-Pacific (8), Business & Tech (5), Science & Culture (3), In Brief (4).

The four pictures are original illustrations made for this entry (no photos were used): `assets/gta.jpg` (lead), `assets/icj.jpg`, `assets/kyiv.jpg`, `assets/riyadh.jpg`.

## Layout

- `page/index.html` — the front page itself (1024×1024, served by GitHub Pages).
- `main.ts` — copies `./entry.png` into `$MAKEFUN_OUTPUT_DIR` (default `/output`), after checking it is a whole PNG/JPEG within the gate limits (≤1 MiB, ≤1024×1024).
- `entry.png` — the rendered front page, 1024×1024.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
