---
layout: post
title: "The Finale"
sub-title: "Weeknotes S01E10"
date: 2018-09-22
description: "Lots of time spent in meetings or at events this week, but I did manage to hold one worthwhile team session, at least."
image: https://cdn-images-1.medium.com/max/2560/1*3XbSISGRKAYByqgTqoAMFw.jpeg
image_title: "Katherine Johnson at work on Project Mercury, 1962"
image_artist: "NASA Langley Research Center"
image_source: https://www.nasa.gov/image-feature/katherine-johnson-at-work-1962
image_credit: "NASA Langley Research Center"
tags:
 - Weeknotes
---

Lots of time spent in meetings or at events this week, but I did manage to hold one worthwhile team session, at least. Need to start blocking out time in my calendar for menial tasks next quarter — emails, Trello, backlog-sorting and the like — so that meetings don’t derail making progress. Desperately need to **get shit done**!

This will be the final episode of my first series of weeknotes. I’ve decided to start a new series each quarter and since next week I’m not in the office, I’ll miss the final sprint and won’t have anything work-related to talk about. So I’m taking two weeks off and will be back with series two in the second week of October!

## Five Things That Happened

_We did more things than this…especially this week_

### One

Mostly spent Monday thinking about the future, the very immediate future. Quarter 3 missions have been finalised, ours being to prepare the GOV.UK platform for the scale demands of Brexit. The point of the mission is to de-risk EU Exit (for GOV.UK) by preparing for large numbers of visitors and concurrent publishing. There’s lots of opportunity to use an lean experimental approach, setting hypotheses and testing scenarios, reading the results to inform product development.

Our key results contributing to a successful mission will be

*   migrating GOV.UK applications to AWS,
*   setting publishing speed and reliability benchmarks and improving those by 10%,
*   stress-testing the pipeline with 2x, 4x, 6x and 8x peak activity, setting hypotheses for improving concurrent publishing next quarter, and
*   serving 2x previous hourly peak traffic with no drop in performance.

In my head, it’s going to work a bit like the production and development of space capsules in [Project Mercury](https://en.wikipedia.org/wiki/Project_Mercury), which I saw in [_Hidden Figures_](https://www.imdb.com/title/tt4846340/). (This week’s image is NASA research mathematician Katherine Johnson, whose story and work the film covers.)

We went for lunch to try and work out our development approach but ended up talking about people. We’re blessed with some excellent developers on our team, but one project has been unfortunately siloed and losing its lead would be a detriment. [V-teams](https://blogs.msdn.microsoft.com/oldnewthing/20121211-00/?p=5863) have their own cadence, despite how fast your own part moves. So we’ll need to tussle for that developer’s inclusion on our roster next quarter.

We did explore options for making concurrent publishing better though, and it’ll be interesting to see those develop further as we put the pipeline through its paces.

### Two

We went to an all-staff event, to hear about [GDS’s future agenda and how it’s being made a great place to work](https://twitter.com/Carrie999Murray/status/1042119219545104384). I do love working at GDS and feel blessed to work on GOV.UK, but frankly I’m oblivious as to how much of that can be credited to the current management. Could be loads, could be little, I’ve honestly no idea. Regardless, they’re doing their bit and I get paid each month, so I can’t complain. It’s essential, though, that we sustain the grassroots start-up culture and people have space to do their best work. We should ask for forgiveness rather than permission on the frontlines of transformation.

After all the corporate jargon (sorry, corporate building blocks), we heard lightning talks from teams who’re really bringing in the results. Would have been better to fill the event with those stories, to be honest. And so closing on a tale of [how open standards can save lives](https://twitter.com/Matt_Leat/status/1042105873336860674) from [James Findlay](https://twitter.com/GoAgileGov) and [Matt Leat](https://twitter.com/Matt_Leat) was awesome. It worked in the Victorian era when railways were breaking new ground, and it’s the same now. Ask them to share that talk if you’re exploring open standards at any time, it gives you good perspective.

> I can also recommend [Mike](https://medium.com/u/c8c40c52174f)’s blog on [why standards are surprisingly not boring](https://medium.com/porism/boring-boring-standards-8843b2ea1f85), and [a guide to creating and maintaining open standards](https://standards.porism.com) which is also from my alma mater.

### Three

Held a scoring session on our backlog of cards grouped under a theme to promote the underlying health of GOV.UK. Those come from a mixture of sources: tech debt, other mission work, ideas from 2nd Line shifts, and good ol’ regular forward-thinking. They haven’t been a priority for the last three months, but given that we’re about to enter a period where the health of the platform is paramount, it seemed like a good idea to look through them.

I used a simple Value vs Effort matrix to score cards and help us make decisions on where to focus effort, checking the relative value of each card. It pays to be ruthless in time-keeping, avoiding too much talk – it’s not a science, we’re only looking for an objective view. I’ll write a post on how I structured that session, in case it’s of use to anyone.

The best result was archiving cards we’d done already in other work. Some cards had their nature altered too; for example, a card about extending an interoperable method to our publishing API turned into one about removing that method from the stack entirely. We’d superseded it with a better, more long-term solution! But the rest is either low-hanging fruit, stuff that needs to be planned into sprints, and ‘anytime’ or ‘some time’ cards.

### Four

Had a remote meeting with Heads of Product across government to talk about an event we’re putting together. It’s good to get the perspective of how product management works across government, and it’s just nice to say hello to your colleagues in other departments.

We ironed out the theme of the event, ideas on the running order, and other logistical bits and pieces. There’s a little more work to do this weekend but, once that’s done, we should be able to release tickets early next week. (It’s free but the size of the venue limits how many spaces we have to offer.)

### Five

Martin and I made some headway into our data science course, first mentioned in [S01E07](https://weeknot.es/the-snorlax-95f4ac78c4c4). It was mostly getting to grips with [Tableau](https://www.tableau.com), a data analysis and visualisation tool, which is really good. You simply feed it a CSV or open data API endpoint and it’ll work out the measures and dimensions, allowing you to build visualisations quickly. You can create calculated measures too, adding new levels of analysis on top of the raw dataset. If you’re at all curious about data science, what it is and how to do it, the [Data Science A-Z™](https://www.udemy.com/share/1000juBUMeeFZRTX4=/) course on Udemy is the one we’re taking and would fill a weekend comfortably.

That got me thinking about what projects we could start during the course. I’m intrigued to know if the way content is arranged on our [blogs platform](https://www.blog.gov.uk) makes a difference to performance metrics. For example, does fewer paragraphs under headings affect scroll depth? Do blog posts with images receive more traffic, and, if so, do pictures of people or diagrams make a difference? But I know Martin’s keen to analyse what items food banks need – an idea I had back in December in this [blog post](https://medium.com/porism/democratising-civic-problem-solving-1a3c81a6d3b7) – and that’s certainly a more worthy use of our time and brains. Be cool to automate it all and publish the data openly with [Octopub](https://octopub.io) or something, as well.

## Reflections

*   The team is the unit of delivery
*   Dust off those dormant backlogs, you might surprise yourself
*   Jump right in and get involved in your community – it’s FUN!
*   Learning new concepts is achievable if you give yourself the time to do it

## What I’m Reading

- [Tips on how to set up and maintain your own community](https://gds.blog.gov.uk/2018/08/29/tips-on-how-to-set-up-and-maintain-your-own-community/)
- [Connect and conquer - build your brand by staging events](https://www.intercom.com/blog/meet-now-conquer-now-build-your-brand-by-staging-events/)