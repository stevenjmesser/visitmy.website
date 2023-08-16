---
layout: post
title: "The Winter Solstice"
sub-title: "Weeknotes S02E09"
date: 2018-12-21
description: "Not a bad week to round off 2018, and Winter Solstice is the perfect day to look ahead to 2019. This series hasn't ended yet."
image: /assets/images/STF_WAG_OP433.jpg
image_title: "Stonehenge"
image_artist: "Henry Mark Anthony"
image_source: https://artuk.org/discover/artworks/stonehenge-19092
image_credit: "Wolverhampton Arts and Heritage"
tags:
  - Weeknotes
---

Not a bad week to round off 2018, and Winter Solstice is the perfect day to look ahead. I'm going to be working over Christmas so this series hasn't ended yet, but this week was definitely a major milestone. It's time to tie off some loose ends and prepare for 2019, as next year will be hectic. Hopefully my weeknotes won't suffer as a result but since [people who are busier and better than me](https://weeknot.es) manage it, I'll always have them to turn to for advice.

## Five Things That Happened

*We did more things than this*

### One

I kicked off _another_ new team, although not one that I'll be managing from day to day. Its mission is to look at another of our key results in Platform Health, a particularly risky one around EU Exit, ensuring that we can handle a spike in departments publishing content concurrently. It's a pretty complex space trying to work out the efficiencies of a distributed publishing pipeline of micro-services, but we made a good start.

[Steve](https://github.com/steventux) is Tech Lead which is perfect, as he's an excellent full stack developer who has a deep knowledge of www.gov.uk and how it has evolved over time. After talking through the mission and setting an objective, I covered some of the cards we'd completed in other sprints, spikes into how we'd collect data on publishing activity and how we'd replay that to the pipeline. The biggest hurdle to overcome was figuring out how to replay fake publishing events, and Steve's managed to use Gatling to do that. That's a huge achievement and means the mission can actually progress now. It *is* possible. We're not sure whether to use Gor or logs data to replicate publishing events but that's something to look at next week.

I should probably write a full guide on how I kick off a digital team in government. I've done it twice in the last three weeks, beyond the usual quarter kick-offs for Platform Health, and a few elements worked really well, so it'd be good to have those to turn to. No doubt others out there could add their tidbits too.


### Two

We deployed all the OFFICIAL-SENSITIVE stuff we'd been working on, so that people and businesses can find information on how exiting the EU will affect them. There's a [campaign](https://euexit.campaign.gov.uk) which points to new content on www.gov.uk, all of which has been through rapid cycles of prototyping, user testing and iteration. A journalist put out a [red-hot take](https://twitter.com/faisalislam/status/1075701805521231873) that UK government was trying to catch up to the Dutch government, as the Dutch did a similar-but-not-the-same thing a few months ago, although the Dutch one spits out a PDF of information that could change. Ours, however, can be updated as policy develops and you can subscribe to email alerts about changes specific to your context.

All that aside, it's testament to our ways of working and the value that GOV.UK provides that we're able to design, build and release these useful tools and information inside of four weeks. It would have been released sooner had [the vote on the deal in Parliament](https://www.bbc.co.uk/news/uk-politics-46509288) not been delayed. So ignoring the political situation and what we were delivering, it turns out that being lean and agile works for making stuff happen.


### Three

In the middle of that day, a day of team ceremonies and the EU Exit Deployathon, I had an interview. Having been worried about it last week, GDS came to their senses and scheduled an interview before Christmas. I made sure to talk about things I had done rather than what we had done as a team, because they called me out on that at HMRC. It went well, I bigged myself up, and they did tons of nodding. But mostly I'll cherish having casually strolled into an interview during some important, stressful work. (I know that's very egotistical but it is quite rare, let me bask in it!)


### Four

Chatted with other PMs and our new Head of Product, Leanne, about our missions for next quarter. I'm leaving my work-family, Platform Health, to start two new teams: Search & Finders Resilience, continuing the work we did on dynamic content performance; and Personalisation, looking at whether users want personalised experiences and how that might benefit them.

Working on Personalisation is going to be great. We've got the Head of User Insights, [Imeh](https://twitter.com/Imeh_Akpan), and Senior Service Designer, [Kate](https://twitter.com/KateIW), working with us, two of the most talented folk on GOV.UK. Plus Leanne was massively involved in personalisation at Sky, so she'll have some good ideas, but it's working with stakeholders that I'm also really excited about.

Users have a mental model around giving government their personal data, which can largely be summarised by 'ERM, NO F***ING WAY'. That's going to be our first thing to explore, as it's the major blocker to personalisation ever being a thing. Despite some senior civil servants, MPs and [think tanks](https://policyexchange.org.uk/publication/the-smart-state/) saying that GOV.UK needs this feature, we don't much like spending taxpayers' money on things they don't need – so we'll validate that first. On top of that, [Ganesh](https://twitter.com/gansenthi) and I will be doing a side project on the Semantic Web and Linked Data, to get GOV.UK into the shape it really needs to be. If you're reading this and I know you _and_ you have worked on Semantic technologies in the past, expect to receive an email soon. (But if you're a Semantic person and I don't know you, please drop me a line!)

Though it's a little sad to be leaving Platform Health, I'm looking forward to working on a UX product after 9 months in the technical trenches. It's going to be in good hands though, and they've got more complex work coming up that I can follow from the other side of the office.


### Five

Oh, and it turns out the interview went well. They offered me the promotion and I'm going to take it, because I really like working on that website. An early Christmas present!


## Reflections

### What I Learned

That 2019 may be even more exciting and move more quickly than 2018.


### What I Could Do Better

This week was absolutely fine, but I'm going to have to get anal about managing my time and focus. With so many plates to spin, I'll need to work hard to make sure we meet all our objectives.


## Bookmarks

- [7 Futuristic Things To Do With Your Body When You Die](https://futurism.com/futuristic-funeral-death-die/)
- [Infoporn: Facebook or YouTube Down? What We All Do When Sites Crash](https://www.wired.com/story/what-we-do-when-facebook-youtube-crash/)
- [We Should Replace Facebook With Personal Websites](https://motherboard.vice.com/en_us/article/vbanny/we-should-replace-facebook-with-personal-websites)
- [Digital Growth Depends More on Business Models than Technology](https://hbr.org/2018/12/digital-growth-depends-more-on-business-models-than-technology)
- [How I Quit Apple, Microsoft, Google, Facebook, and Amazon](https://motherboard.vice.com/en_us/article/ev3qw7/how-to-quit-apple-microsoft-google-facebook-amazon)
