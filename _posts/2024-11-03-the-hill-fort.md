---
layout: post
title: "The Hill Fort"
sub-title: "S18E12"
date: 2024-11-03 15:40:55Z
description: "Writing up our growth strategy and tying off loose ends before an extended break abroad. Ciao for now."
image: /assets/images/IMG_3050.jpg
image_title: "Arthog and Afon Mawddach"
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Weeknotes
---

As the train departs from Penhelyg station, I start writing my last weeknotes for a while. Next week I’m heading off to Japan for November, so this week was all about wrapping up what I’m working on, handing it over for a few weeks.

## Growth strategy

My main task was to write up the growth strategy I’d shaped and started collaborating on with other teams in the programme. One of our programme-wide objectives is to have 75 local councils using modern planning software, which needs work from both the Data and Software teams – our teams, and the teams running the Open Digital Planning community.

I outlined the short discovery project that has started, building on work Projects by IF did earlier in the year, that will help us define archetypes of local planning authorities (LPAs). We’ve also started collecting more information from the month-notes that LPAs write, allowing us to say what ‘stage’ they’re at in the process. And we’re researching the key blockers and enablers for LPAs too, which will feed into the archetypes. 

After sharing the paper with our service owners, I handed the work over to one of our product managers and one of the community leads. They’re going to keep it chugging along in my absence. 

## Automated deploys

I tried adding a GitHub Action to the repository for this website, so that it would build and deploy the site whenever a pull request is merged. Unfortunately I ran into a few issues supporting the Ruby gems I use. 

One of those problematic uses TF-IDF to build the related posts section at the bottom of each post. I switched it out for a gem that uses OpenAI’s embeddings API instead, which I figured would be better supported. Unfortunately that causes a problem too, so I’m right back where I started!

## Interdisciplinary works

A few paragraphs from [an article on mid-century design](https://www.dezeen.com/2024/10/15/power-polymath-mid-century-period-modern/){:target="_blank"} really stuck out. A few people have spoken about people on digital teams being too specialised these days, about there needing to be a return of the generalists – or polymaths. 

> Over time, however, the model offered by the polymath and inter-disciplinary design has gradually been eroded, leading to inevitable sterility and countless lost possibilities. By the eighties and nineties the specialists had taken control, with architects, interior designers, lighting consultants and landscape designers all defending their own territory.
> 
> This shift was related, in some ways, to the increasingly technical demands of projects as manufacturing and construction systems grew more complex and regulations got tighter. Yet, at around the same time, courses were also becoming increasingly specific within universities and higher education institutions, while creative crossover between departments became a rarity rather than a given.

## Egryn

We spent this weekend in [Egryn](https://www.nationaltrust.org.uk/holidays/wales/egryn){:target="_blank"}, a medieval hall house near Abermaw. The last time I was in this area was April 2023, when I walked Taith Ardudwy. It’s a beautiful area, and it was so good to be back in North Wales.

We hiked up the hillside from the house, climbing 230m to Pen y Ddinas, an Iron Age hill fort. The views were stunning. 

## Time off

I’m really, really looking forward to having some time off work. We’ve been working hard to make progress on our mission, and I believe it’s starting to have an effect. Things are starting to come together, it’s really exciting!

But it’s time to go explore another land for a few weeks. Let’s see what Japan has to offer. Can’t wait for a big relax in an onsen. Can’t wait to soak up their city life. Can’t wait to try some new foods!

## Bookmarks

- [Using Cloudflare on your website could be blocking RSS users](https://openrss.org/blog/using-cloudflare-on-your-website-could-be-blocking-rss-users){:target="_blank"}, 4 mins
- [Working From Home Is Powering Productivity](https://www.imf.org/en/Publications/fandd/issues/2024/09/working-from-home-is-powering-productivity-bloom){:target="_blank"}, 9 mins
- ["There was a profound belief in the power of the polymath during the mid-century period"](https://www.dezeen.com/2024/10/15/power-polymath-mid-century-period-modern/){:target="_blank"}, 6 mins
- [Focus on decisions, not tasks](https://technicalwriting.dev/strategy/decisions.html){:target="_blank"}, 1 mins
- [Accountability sinks](https://aworkinglibrary.com/writing/accountability-sinks){:target="_blank"}, 4 mins
- [We’re on GCloud 14](https://words.ff.studio/on-gcloud-14){:target="_blank"}, 4 mins
- [Can we trust official statistics? The data gaps shaping our view of the economy](https://www.ft.com/content/4978a9f8-e2d5-4a9d-80e7-02b0ba2bd56c?shareType=nongift){:target="_blank"}, 4 mins
- [The ‘worst product ever’ has a lot to admire](https://www.dezeen.com/2024/10/28/humane-ai-pin-worst-product-abb-d-taiyo-driftime-opinion/){:target="_blank"}, 5 mins
- [What does Chancellor Rachel Reeves’ budget mean for the UK tech sector?](https://www.thestack.technology/chancellor-rachel-reeves-announces-a-budget-thats-light-on-tech-heavy-on-tax/){:target="_blank"}, 4 mins
- [Open-source AI must reveal its training data, per new OSI definition](https://www.theverge.com/2024/10/28/24281820/open-source-initiative-definition-artificial-intelligence-meta-llama){:target="_blank"}, 4 mins
- [More than a quarter of new code at Google is generated by AI](https://www.theverge.com/2024/10/29/24282757/google-new-code-generated-ai-q3-2024){:target="_blank"}, 2 mins
- [‘Fear and Skepticism’: AI Automation Arrives for Salespeople](https://www.theinformation.com/articles/fear-and-skepticism-ai-automation-arrives-for-salespeople){:target="_blank"}, 1 mins
- [OpenAI’s ChatGPT Adds Search Features in Challenge to Google](https://www.theinformation.com/briefings/openais-chatgpt-adds-search-features-in-challenge-to-google){:target="_blank"}, 1 mins
- [AI-Powered Social Media Manipulation App Promises to ‘Shape Reality’](https://www.404media.co/ai-powered-social-media-manipulation-app-promises-to-shape-reality-4/){:target="_blank"}, 11 mins
- [When Does Instagram Decide a Nipple Becomes Female?](https://www.404media.co/when-does-instagram-decide-a-nipple-becomes-female/){:target="_blank"}, 6 mins
- [Apple stuck the Mac mini power button on the bottom](https://appleinsider.com/articles/24/10/29/apple-stuck-the-mac-mini-power-button-on-the-bottom?utm_medium=rss){:target="_blank"}, 2 mins
- [UK’s rising fiscal burden narrows tax gap with Europe](https://on.ft.com/4hjsCQN){:target="_blank"}, 2 mins
- [Annoyed Redditors tanking Google Search results illustrates perils of AI scrapers](https://arstechnica.com/gadgets/2024/10/fake-restaurant-tips-on-reddit-a-reminder-of-google-ai-overviews-inherent-flaws/){:target="_blank"}, 2 mins
- [4 ideas for the digital centre of government](https://www.dxw.com/2024/10/4-ideas-for-the-digital-centre-of-government/?trk=feed_main-feed-card_feed-article-content){:target="_blank"}, 5 mins