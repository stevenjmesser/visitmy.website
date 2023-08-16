---
layout: post
title: "The Syndication"
sub-title: "Weeknotes S03E05"
date: 2019-02-26
description: "A decent week but it's not possible to explore ideas fully within a deadline; it'll end when it ends."
image: /assets/images/STF_STKMG_2006_FA_9.jpg
image_title: "Untitled: Armchair Painting"
image_artist: "Amikam Toren"
image_source: https://artuk.org/discover/artworks/untitled-armchair-painting-20238
image_credit: "The Potteries Museum & Art Gallery"
tags:
 - Weeknotes
---

A bit late getting these out, it was a busy weekend so I didn't have time to write my weeknotes. A decent week but, given that we're halfway through the quarter, it feels like I'm running out of time to write a white paper on personalisation. That shouldn't feel the case. It's not possible to explore ideas fully within a deadline; it'll end when it ends.

## Five Things That Happened

*We did more things than this*

### One

Met up with [Martin](https://twitter.com/Martin_Jordan), Head of Service Design, to chat about life events and what's going on in digital government internationally. He hooked us up with some useful people in Germany and Estonia, and I shared some work Porism did on [life events](http://id.esd.org.uk/list/lifeEvents) and [circumstances](http://id.esd.org.uk/list/circumstances).  

I also chatted with Christina, a user researcher at DfE but previously working at HMRC, about work she'd been involved in called 'credential alignment'. Some research participants expressed frustration that there wasn't a link between HMRC services and Companies House services, and it's possible there's more gaps like that across government.  

### Two

I started writing a talk for the GDS product management community meet-up about blogging and working in the open. The aim is to encourage more product managers at GDS to blog about their work, either on the official blogs or elsewhere, but I spent all the time talking about the idea behind working in the open. So I'm not sure how that's going to inspire people. It probably sucks. 

Please do let me know if you'd be happy to take a look.

### Three

My team-mates on Search Resilience & Performance got the new [search-api](https://github.com/alphagov/search-api) working in Integration, including queries for other applications, really quickly. They had to switch back to [rummager](https://github.com/alphagov/rummager) briefly for some priortised testing but it didn't disrupt them too much. They spent the time working out how to create a 'super schema' for document type mapping, which should mean that upgrading from Elasticsearch v5.6 to v6 will be a one-click upgrade. This will also give the new application time to bed down, exposing any issues we might miss by pressing on too quickly.

They also explored using machines with different specifications for the master nodes and data nodes. It's actually cheaper doing it that way, which is nice, so it'll save tax-payers more money in the long-run – which is great. Next we're testing different sharding options to optimise the latency and resilience of the clusters.

### Four

Spent lots of time writing and practising a presentation about our work on GOV.UK for the [Digital Centre of Expertise](https://webarchive.nationalarchives.gov.uk/20180801140850/https://gcs.civilservice.gov.uk/guidance/digital/digital-centre-of-excellence/), a meeting of digital marketing and communications professionals from across government. Because I'm in the early stages of exploring something – what I'm calling a strategic discovery – I spent my 5 minutes talking about generative research and innovating on evidenced user needs. 

It's a bit vague about what we've been doing, really, but that's the point: I don't want anyone to think we're committing to any technical solutions before we've found a problem to solve. Whilst I'm arguably in the business of innovation (small 'i'), it's not my style to indulge in Innovation theatre (big 'i'). Dave Rogers wrote a timely post about [why hype technology is killing innovation](https://medium.com/@daverog/why-hype-technology-is-killing-innovation-84151c62a18b) and got the message across much better than I could, I strongly recommend everyone read it.

For the presentation's final revision, I came across this part of the [Government Transformation Strategy](https://www.gov.uk/government/publications/government-transformation-strategy-2017-to-2020/government-transformation-strategy) (my highlighting):

> We will transform government services and make government itself a digital organisation so that citizens, businesses and other users have **a better, more coherent experience** when interacting with government services - one that meets **the raised expectations set by the many other (non-government) services and tools they use every day**.

It made me feel better about what we were exploring, so I went big on selling that vision not the specific technology. It has made it easier to sleep at night and consider how we might frame any eventual user research.

### Five

I wrote a post about [how we use OKRs](https://visitmy.website/2019/02/21/how-we-use-okrs-gov-uk/) and syndicated [the content on Medium](https://medium.com/@stevenjmesser/how-we-use-okrs-on-gov-uk-1a8ac8be7eba). It has been doing well on Medium with over 1,000 views since I posted it, but only 11 per cent of traffic has come from Medium itself. The rest has come from a couple of tweets (by others, not me) and posts on news boards (by me).

For me, it's proven the worth of leaving Medium to [make the web personal again](https://twitter.com/stevenjmesser/status/1099056242306236417), driving value to your blog not Medium's platform. To that end, the [Internet idealist](https://www.technologyreview.com/s/611805/the-four-ways-that-ex-internet-idealists-explain-where-it-all-went-wrong/) in me added a link to my blog's RSS feed in the top navigation bar. 

## Reflections

### What I Learned

That some times you need to wield the vision to carry things forward.

### What I Could Do Better

I had some strong phrases edited out of my presentation, so I could probably do with learning a bit of diplomacy. 

## Bookmarks

Still having a crack at writing a newsletter, please do [sign up](https://tinyletter.com/stevenjmesser)!

- [Medical cannabis is now in the UK, but nobody can get a prescription](https://www.wired.co.uk/article/medical-cannabis-nhs-prescription), 6 mins
- [Roadies vs. Rock Stars](https://workopen.org/leadership/), 7 mins
- [Why hype technology is killing innovation](https://medium.com/@daverog/why-hype-technology-is-killing-innovation-84151c62a18b), 4 mins

_These weeknotes took me 1.5 hours to write on a Monday evening and I added some final tweaks on Tuesday morning._