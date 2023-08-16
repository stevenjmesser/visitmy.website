---
layout: post
title: "The Spin Up"
sub-title: "Weeknotes S02E07"
date: 2018-12-07
description: "The most fun I've had at work in a week on record. We're doing work which sings to the vision of GOV.UK, making information about government and services simple, clearer and faster."
image: /assets/images/CHE_CRHC_PCF80.jpg
image_title: "Unidentified Locomotive"
image_artist: "Harry Watson"
image_source: https://artuk.org/discover/artworks/unidentified-locomotive-103057
image_credit: "Crewe Heritage Centre"
tags:
  - Weeknotes
---

The most fun I've had at work in a week on record. We're doing work which sings to the vision of GOV.UK, making information about government and services simple, clearer and faster. Can't knock it really, though it's a heck of a change of pace from lying on the beach last week!

## Four Things That Happened

*We did more things than this*

### One

I had the honour of spinning up a brand new sub-team. If you don't count the outsourced teams I've run and looking after Platform Health while Martin's off, this is my first time leading a multidisciplinary team at GDS – and I'm loving it. Staying aware of emotional energy while also having open conversations about delivering value for users is hugely enjoyable, especially when you have a team of excellent people.

We had a quick kick-off on Tuesday from our lead technical architect, Tim, who explained that our team would be looking after dynamic content performance, the fourth of Platform Health's OKRs that I set with Martin at the start of the quarter. After taking them through the technical introduction to GOV.UK's architecture, I disbanded the group and set up to meet the following day at 9 a.m.

We grouped at 10 a.m. on Wednesday and spent pretty much the entire day defining our mission: the objective, what success would look like, our ways of working, and a [Johari Window](https://en.wikipedia.org/wiki/Johari_window) to start building a roadmap. By 4 p.m. we had a team charter, a roadmap, a prioritised backlog and a set of cards to tackle the following day.


### Two

Aditya, one of our developers on the new sub-team, is profoundly deaf and working with him has been a real eye-opener. It hasn't been that hard to bear his needs in mind, and I'm making sure to address him directly and speak clearly, but it does change the pace of conversation some times. It makes us more metered and considered, if anything, as more effort needs to go into how one conducts oneself. We're also filling in a doc before and after daily ceremonies too, so that he can read through the morning's stand-up or the afternoon's playback if he's working from home. That's one element I really like, having a record of what I said to check against what I manage to achieve.

Aditya is very pleasant to work with too, a gracious person who's always smiling. We've a very considerate working culture at GDS but anyone would be hard pushed to *not* change their working patterns for him! Top bloke.


### Three

[Tijmen](https://twitter.com/tijmenbr), our tech lead, had dived headlong into the new work with Jon, another developer on the team whom we've borrowed from the Observe team. Following a quick run-through of dynamic content applications on GOV.UK, they got started on looking into previous load-testing we'd done on Platform Health. They were able to quickly identify opportunities for optimisations, adding [HTTP caching](https://github.com/alphagov/finder-frontend/pull/722) and content caching where appropriate.

The tests on that pull request show an improvement on one Finder being able to serve 16x more requests with zero errors. The change was deployed later on that day and Tijmen put together a Grafana dashboard, to show the effect across all Finders and search pages on average, which I've been watching throughout most of Friday. It has reduced the number of requests being served by finder-frontend by 17%, widening the bottleneck and shifting the load onto our internal caches and the content delivery network.

All within two days. Working at this rate, in a fast cycle, and achieving these results is testament to our working practice. It's moments like this when you realise just what we can achieve in a short space of time with determination, skill and good frameworks.


### Four

I've got an interview at HMRC on Friday – woo! No news of the GDS PM interviews yet, but we'll see what becomes of those. They've been delayed for quite a while now.


## Reflections

### What I Learned

That I'm capable of leading a team...for a few days, anyway. Here's hoping the next two weeks go just as well.


### What I Could Do Better

It would have been better if I'd foreseen needing to spend the entirety of Wednesday with the new sub-team, rather than thinking I could juggle that and Platform Health too. That was naïve of me, but there weren't any ill effects on the team so perhaps it's not such a huge deal.


## Bookmarks

I read through a boat-load of stuff on holiday, here's a selection of the best bits. There's a very particular theme, perhaps based on the fact I was reading Douglas Rushkoff's *Throwing Rocks at the Google Bus* at the same time.

- [Common PM Problem Areas](https://svpg.com/common-pm-problem-areas/)
- [Here's a list of all the times that Facebook proved you can't trust it](https://www.wired.co.uk/article/a-short-history-of-facebooks-mess-ups)
- [Targeted Advertising Is Ruining the Internet and Breaking the World](https://motherboard.vice.com/en_us/article/xwjden/targeted-advertising-is-ruining-the-internet-and-breaking-the-world)
- [What Do You Really Mean by Business “Transformation”?](https://hbr.org/2016/02/what-do-you-really-mean-by-business-transformation)
- [Platform Monopolies](https://avc.com/2014/07/platform-monopolies/)
- [France is ditching Google to reclaim its online independence](https://www.wired.co.uk/article/google-france-silicon-valley)
