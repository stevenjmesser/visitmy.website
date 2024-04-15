---
layout: post
title: "The Blossom"
sub-title: "Weeknotes S17E06"
date: 2024-04-15 07:04:40+01:00
description: "Some A-ha! moments about our data standards, and why I think the design paradigm of static, linear forms is letting us down."
image: /assets/images/IMG_1721.jpg
image_title: "Pink blossom on a tree in front of a house"
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Weeknotes
---

Hello, Monday morning. No doubt I should have written these on Friday evening or Sunday morning when I had time but, honestly, I prioritised other things. Feeling good about that. 

I watched _Black Hawk Down_ on Friday, which I’ve been meaning to see since a friend went nuts about it when it came out (2001!). Not sure it deserved the hype my friend – 13 years old at the time –  gave it. 

On Sunday, yesterday, I stayed in while a man laid new felt on a flat roof that had been leaking. Many hours spent sitting in an armchair, reading articles, reviewing the route for my upcoming marathon, and preparing my nutrition plan. (You need around 500ml of water an hour and 100 calories a mile, plus salts, so there are sums involved.) That was particularly important to do because I ran 27km on Saturday, from Caterham to Dorking along the North Downs Way, and half of it was a struggle. I’m blaming caffeine, which I haven’t used on a run in months.

Anyway, that’s all a diversion from what I’m supposed to be talking about: the working week last week.<!-- [^1] --> 

In general, it was a good week. I spent a day and a half in the office with psd and did lots of talking and scribbling on whiteboards, soaking up more information about the platform, the data standards, and the vision. Possible over video but much better in person.

Our tech lead showed me our [Datasette](https://datasette.io) instance too, which helped me explore the open data we harvest from local planning authorities and how we make that fit out data model. This also gave me a route for playing with SQL and pulling stats out of the live data, letting me work with the material of our platform.

There were a couple of A-ha! moments last week. Our data standards are based on [principles](https://standards.planning-data.dev/principles/) and [rules](https://standards.planning-data.dev/rules/) for designing the standards. Some of these I knew from working in open linked data previously, they’re principles and rules embedded in the domain. Others are more visionary but point to a more adaptive, iterative future of living data. 

Anyway, one key principle is [some data is better than no data at all](https://standards.planning-data.dev/principles/#some-data-is-better-than-no-data-at-all), and that’s great. It sets us up for a related design principle. Right now you can’t add one field of data, you have to conform to a whole standard, which can be an uphill struggle (depending on your toolset and the way your organisation works). But if you could do one small task and succeed, the elephant is sliced and it could be easier to proceed. 

I think this is where the design paradigm of mostly static, mostly linear forms in government lets us down. It’s used as a one-size-fits-all solution, but it’s not always appropriate. Sure, it’s handy in a lot of situations, especially where you don’t need to overcomplicate things. But there are domains and contexts where a much more dynamic, responsive interface is necessary for the job at hand. Where it feels more like an application rather than a form.

A part of the problem is [fear and damaging dogma]({% post_url 2023-08-16-bureaucracy-fear-and-damaging-dogma %}), so it’ll be hard to shift some gears. But if it’ll achieve better outcomes for users, it’s worth it.

Right, that’s enough for a Monday morning. Time to get to work.

## Bookmarks

- [iOS 17’s Creepy-Sounding ‘Discoverable by Others’ Journaling Setting Isn’t Actually Creepy](https://daringfireball.net/linked/2024/03/28/ios-17-discoverable-by-others-joanna-stern), 2 mins
- [Terra AI "compass" enables users to take phone-free walks](https://www.dezeen.com/2024/04/05/terra-ai-compass-panter-tourron-modem-works-design/), 3 mins
- [Jampack – Optimizes static websites as a post-processing step](https://news.ycombinator.com/item?id=39816836), 2 mins
- [Extracting data from unstructured text and images with Datasette and GPT-4 Turbo](https://www.datasette.cloud/blog/2024/datasette-extract/), 2 mins
- [Visibility: The Fog of Work](https://www.gilzilberfeld.com/2017/09/visibility-the-fog-of-work.html), 3 mins
- [Use Doctrine to Pierce the Fog of Business](https://hbr.org/2013/02/use-doctrine-to-pierce-the-f), 5 mins
- [Why won’t some people use a smartphone? And is that difficult?](https://www.aalto.fi/en/news/why-wont-some-people-use-a-smartphone-and-is-that-difficult), 2 mins
- [OpenAI and Meta ready new AI models capable of ‘reasoning’](https://on.ft.com/4aRwyUV), 3 mins
- [IR35 tax changes contribute to economic inactivity](https://on.ft.com/3VMYTXT), 3 mins
- [What I think about when I edit](https://evaparish.com/blog/how-i-edit), 10 mins
- [AI Chair 1.0](http://booktwo.org/notebook/ai-chair-1-0/), 6 mins
- [AI Chair 1.1: Llamafiles and Mistral](http://booktwo.org/notebook/ai-chair-1-1-llamafiles-and-mistral/), 7 mins
- [Team memory, organisational sharing and serendipity in distributed workplaces](https://emilywebber.co.uk/team-memory-organisational-sharing-and-serendipity-in-distributed-workplaces/), 8 mins
- [Blockin’ bots](https://ethanmarcotte.com/wrote/blockin-bots/), 3 mins
- [Don’t let a linear design process snuff out your sparks of inspiration](https://jlzych.com/2024/04/12/don-t-let-a-linear-design-process-snuff-out-your-sparks-of-inspiration/), 2 mins
- [Humane AI Pin review: the post-smartphone future isn’t here yet](https://www.theverge.com/24126502/humane-ai-pin-review), 15 mins

<!-- ---
 [^1]: Despite the [pre-election period](https://commonslibrary.parliament.uk/research-briefings/sn05262/), I’m talking about what I did at work because I don’t believe it’ll influence the outcome of an election one bit. This is _my_ website, not a government one. I’m not making any announcements. I’m not claiming any wins. The technology we’re working on is a small piece of a much larger system, which is nestled inside a much, much larger hyperobject. This is one weeknote, not the fully machinated Vote Leave campaign. -->