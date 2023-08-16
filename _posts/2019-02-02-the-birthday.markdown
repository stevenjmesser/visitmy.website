---
layout: post
title: "The Birthday"
sub-title: "Weeknotes S03E03"
date: 2019-02-02
description: "This week I celebrated my first anniversary at Government Digital Service."
image: /assets/images/MER_WGM_PCF_222.jpg
image_title: "Anniversary"
image_artist: "David Pugh Evans"
image_source: https://artuk.org/discover/artworks/anniversary-67258
image_credit: "Williamson Art Gallery & Museum"
tags:
 - Weeknotes
---

This week I celebrated my first anniversary at Government Digital Service. When the days are long and the work is hard, it's easy to get dismayed, but that's when I pinch myself to remember that I work on the UK government's website. Next week I'm on leave, heading over to General Assembly to teach on their product management course, which is always fun. Means I might have the headspace to write up those blog posts I've been meaning to for ages!

## Five Things That Happened

*We did more things than this*

### One

The first team retro for Search Performance & Resilience went well. We're clearly on the right track – it was a very positive session – and we have made the uncertain more certain early on, but we exposed issues around the [dev VM](https://en.wikipedia.org/wiki/Virtual_machine). Our developers have to download a lot of data to emulate www.gov.uk on their virtual machines, which means they often run out of disk space, but this problem is compounded when you're having to load large search indexes too. It's a programme-wide problem and we're not the only team facing this issue, but it is more acute for our developers.

We'd heard word that [Chris](https://github.com/cbaines) had developed a way to take a slice of the data, meaning you needn't load everything, but weren't entirely sure the scripts existed. He had previously put together mini-environments though and I asked whether we could explore that too.

I asked whether we might be moving too fast, as I didn't want us to miss any important details, but everyone thought were moving at a fine speed. This was improved later in the week when meeting the AWS Migration team. They were planning on migrating [Rummager](https://github.com/alphagov/rummager), our search API, but have had to focus on other parts of the infrastructure. Our roadmaps align though and they should be ready to help us route traffic from dependencies to the new [Search API](https://github.com/alphagov/search-api) once it's up and running.

And finally I filled in a massive, gigantic spreadsheet charting our costs for search functionality over the next three years. As Liz Sarginson, our deputy director for Technical Operations, said: 'Product managers should know the costs and financial effects of their decisions.' 

### Two

We're getting a programme-wide roadmap put together, and I shaped how we might improve our [product pipeline](https://en.wikipedia.org/wiki/Product_pipeline). Currently we have support tickets lumped in with feedback and feature requests, which means we're mixing together the 'I want to report a broken thing' tickets with the 'I want to know how to do a thing' tickets. And the 'I want to be able to do a new thing' tickets get barely any time spent exploring the problem area.

My proposal is to look into our current models for support, ongoing user testing, feedback and triage, aiming to quanitfy the operations and expose the pain points. We need to collect qualitative data on how this has been handled at other organisations and agencies, and I've some experience of doing this at NOW TV and Porism. (My pipeline for eCasework was really slick and meant our user retention went up, because user felt like they were being listened to.) We're in need of a good knowledge base too, or at least some rules around making sure it's updated. Too much of our product knowledge is stored up in people's heads, which is not helpful when new people join the programme or move across product areas. 

After that, I'd like to look at how we work more closely with departments and end users, the next layer of the gumball: collecting and validating user needs, lean testing and research models, onsite observation for innovation, guerilla UX testing and other methods for improving our new product development. How do we best become aware of signals from users and ensure we don't miss opportunities?

### Three

We held the first Product People LDN of 2019. Four people working in agile delivery teams spoke about their experiences working on EU Exit projects, with some excellent highlights. Move user research closer to policy, meaning it's shaped based on real user need. Don't force an MVP to be ready by a deadline, you'll almost certainly miss the real and huge opportunities to create efficiences across government. Keep your cool about you and use your agile nous. Focus on purpose in a noisy context.

Thanks to everyone who made it over to Whitechapel, to the speakers for their time, and to my colleagues for helping me hand out passes, direct people to room, etc. It's such a good cross-government community!

If you missed out on the event, [view the presentations](https://docs.google.com/presentation/d/1Akj8MfT6PyV3FMPqcKVKjTyP0l5fp60Kyo869y5cApU/edit).

### Four

We had a playback session for the Explore Personalisation mission. We've just started turning over the rocks to find out what's beneath, interviewing other organisations, international governments and others to explore this area. [Mark](http://mhurrell.co.uk) starting putting together some excellent desk research on the rise and fall of personalisation on other Web platforms. I pestered people at Facebook, Netflix and elsewhere to talk to us, but no dice so far. I did a little vomit because Facebook refers to itself as ['the Internet's leading social utility'](https://newsroom.fb.com/news/2006/09/facebook-launches-additional-privacy-controls-for-news-feed-and-mini-feed/).

We've lost our delivery manager to EU Exit projects, so I'll try and keep the ship sailing. 

### Five

Chatted to Fajer about GOV.UK Registers. I was delighted to hear that she'd been enthused by meeting folks at the Department for Digital, Culture, Media and Sport and the Department for Transport. It sounds like she can see the opportunities for taking Registers to the next level, helping pin together some of the fabulous efforts the open data community in government is already realising. 

## Reflections

### What I Learned

What it's like navigating a team through ambiguity. Exploring a nebulous problem area isn't easy, especially when it is ill-defined and not related to goals. But having a wide-enough scope to uncover glimmers of the possible is one of the ways we can innovate (little 'i'). Grateful to John for his [post](https://medium.com/@johnpcutler/15-things-you-should-know-about-product-managers-f488513d246) reminding me that being at the centre of the tornado is the job.

### What I Could Do Better

It took me a couple of hours, split over a few days, to put together the gigantic costs spreadsheet for Search Resilience & Performance. It kept popping up in stand-up, unfinished, so I could perhaps be better at carving out time for large pieces of work like that. Maybe I should have a logbook of how long certain tasks usually take, that'd be helpful in planning my week.

## Bookmarks

Thank you to the people who've signed up to my [mailing list](https://tinyletter.com/stevenjmesser) this week, I'm really glad to hear people think it's a 'great collection of stories'!

- [#abenotes — January 25, 2019](https://weeknot.es/abenotes-january-25-2019-476b0f4c16f0), 3 mins
- [Weeknotes 2.4: Keep On Keeping On](https://weeknot.es/weeknotes-2-4-keep-on-keeping-on-5872d6b7a0cd), 4 mins
- [Organising around users](https://jordanh.net/posts/organising-around-users/), 3 mins
- [The perennial debate about whether your phone is secretly listening to you, explained](https://www.vox.com/the-goods/2018/12/28/18158968/facebook-microphone-tapping-recording-instagram-ads), 9 mins
- [The attention economy](https://char.gd/recharged/daily/the-attention-economy), 5 mins
- [Open Federal Data is Now the Law of the Land](https://www.nextgov.com/analytics-data/2019/01/open-federal-data-now-law-land/154181/), 2 mins
- [Hack Brief: An Astonishing 773 Million Records Exposed in Monster Breach](https://www.wired.com/story/collection-one-breach-email-accounts-passwords/), 4 mins
- [The internet's 'father' says it was born with two big flaws](https://www.businessinsider.com/google-vint-cerf-explains-why-early-internet-lacked-security-and-room-2019-1), 5 mins
- [Assisted Digital – what it is and how to do it well](https://www.martinlugton.com/assisted-digital-what-it-is-and-how-to-do-it-well/), 4 mins
- [It’s time to force tech giants to end the digital panoptican](https://www.newstatesman.com/politics/staggers/2019/01/it-s-time-force-tech-giants-end-digital-panoptican), 4 mins
- [How social media makes fascists of us all](https://unherd.com/2018/08/social-media-makes-fascists-us/), 7 mins
- [Whatever Happened to the Semantic Web?](https://twobithistory.org/2018/05/27/semantic-web.html), 17 mins
- [Web Standards: The What, The Why, And The How](https://www.smashingmagazine.com/2019/01/web-standards-guide/), 26 mins
- [The Art of the User Interview](https://medium.springboard.com/the-art-of-the-user-interview-cf40d1ca62e8), 15 mins
- [On Bureaucracy](https://medium.com/oneteamgov/on-bureaucracy-ba91dca5a75), 4 mins
- [Can a reality TV show discourage corruption?](https://www.economist.com/middle-east-and-africa/2018/01/25/can-a-reality-tv-show-discourage-corruption), 2 mins
- [Should we measure if a digital service is a good citizen of the web?](http://mrdudders.posthaven.com/should-we-measure-if-a-digital-service-is-a-good-citizen-of-the-web), 5 mins
- [We are not our users: we should not tell them how to feel](https://digitalblog.coop.co.uk/2019/01/17/we-are-not-our-users-we-should-not-tell-them-how-to-feel/), 4 mins
- [The facts about Facebook](https://techcrunch.com/2019/01/26/the-facts-about-facebook/), 22 mins
- [“Black Mirror” isn’t just predicting the future—it’s causing it](https://qz.com/1513524/black-mirrors-bandersnatch-creates-the-future-not-predicts-it/), 4 mins
- [15 Things You Should Know About Product Managers](https://medium.com/@johnpcutler/15-things-you-should-know-about-product-managers-f488513d246), 13 mins

_These weeknotes took me two and a half hours to write on a Saturday morning. It always takes me that long, and I often do it on a Saturday morning._