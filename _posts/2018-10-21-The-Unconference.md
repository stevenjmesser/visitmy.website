---
layout: post
title: "The Unconference"
sub-title: "Weeknotes S02E02"
date: 2018-10-21
description: "I’ve pulled out the main lessons from the week, but everything was overshadowed by the unconference – which was a real success."
image: https://cdn-images-1.medium.com/max/2560/1*-iDNXj_uEgT-Jv9hdzWNqg.jpeg
image_title: "The Lecture"
image_artist: "Margaret Oldridge"
image_source: https://artuk.org/discover/artworks/the-lecture-134079
image_credit: "Bruce Castle Museum"
tags:
 - Weeknotes
---

These notes are hurriedly typed up, not well formatted, and probably impenetrable – but they make sense to me. I’ve pulled out the main lessons from the week, but everything was overshadowed by the unconference – which was a real success. I’m very proud of that and in debt to the people who helped me put it together.

It took a lot of energy though, so this week’s notes haven’t been given the same dedication as usual.

## Five Things That Happened

_We did more things than this_

### One

Had aimed to work out which applications needed work in the pipeline by looking at stats in AWS X-Ray, our request tracing software. Spent most of the morning trying to get access to it. We’ve only recently got access to Amazon Web Services set up, so we have only a few administrators, and everyone who could help was at AWS Game Day. It was frustrating that I couldn’t start gathering data that would be essential for backing up any work we decide to do.

But that changed in the afternoon. I heard about an incident review and realised we had to cater to _everything_ going through the pipeline, not just fix the slow stuff. It got me thinking: maybe looking at the data first wasn’t the right way to go, and everything should be based on user value. I changed tack and thought about criticality of _all_ jobs-to-be-done on GOV.UK. It’s a way to cut through everything the platform offers and prioritise everything against each other. I was in a serious flow of creative thinking but needed to check my analysis against something, so I went and bothered [Emily](https://medium.com/u/f30ef58c4490). She helped by sharing how they’re approaching setting SLIs by mapping user journeys and stack traces against outcomes. This was massively helpful – exactly what I needed – and I went away to start building a framework to help us work out which applications need work _first_.

The boon here is that we have tons of data, swathes of it – huge tracts of data – but now we know how to slice it up.

### Two

Put the framework together in the morning and started weighting some jobs against each other. Realised we needed to validate our assumptions against some qualitative data, started thinking about how to form a survey for the programme, content product leads and other teams – the intro of which became an explainer for the framework.

Had pre-planning, explained my ideas to Martin and Bevan. The framework supports the research Bevan’s already done and the hypotheses he’s put together for improving things, and it gives us an objective view of what we’re fixing and by how much. We should be able to marry up, quite quickly, their ideas to a delivery plan without much ambiguity. Arguably the technologists on our team would be able to fix the pipeline without a product manager, they’re hugely talented, but the framework gives us a way to get buy-in from the management team – and check our assumptions too.

Later there was an interesting comment when a team member said that some parts of the onboarding process were crap, but when asked how they’d change it they just reiterated it was crap. They didn’t offer ideas for what they’d hoped would be different. Bevan said that people don’t immediately realise they have the agency to change things, but we do at GDS. We can actually improve our workplace, and it’s a good point. Mustn’t forget that.

### Three

Another great morning coffee with [Alex](https://medium.com/u/e2a8548b9f4f). We talked about selling ideas into teams and how, ideally, platform teams should be able to work autonomously.

Have spent much of the last two weeks helping a Content Designer from another department with their struggles dealing the culture of their workplace. It’s deadline heavy, their scrum masters don’t listen and just are not really willing to help. Bad situation but felt it was important to help them try and improve the scenario, but also reminded them that they can choose which battles to fight.

Had a tougher-than-usual sprint planning session but that was to be expected. Last week’s didn’t register with people and I’ve since had new thinking to help frame things, and wanted to make sure that landed well. So, I put forward cards for how we’ll change tack and look at defining how different bits of the stack fit together based on Jobs-to-be-Done. Had some healthy challenge from Bevan, and one of our developers, Tom, asked _What if it turns out the problems are all with Whitehall Publisher?_ Well, at least then we’ll have the data to spin up a mission around fixing or replacing it.

I’m trying to find a way to turn all the latent problems with GOV.UK into a 12-month roadmap. Feel like this could be the beginning of that.

The afternoon was spent celebrating GOV.UK’s sixth birthday, and it still feels like an honour to work on this thing!

### Four

Was supposed to present at the Delivery & Support fortnightly huddle but a couple of folk overran, so we got bumped to the next one. Not terrible but I’d rather not spend another 45 minutes on a Thursday morning stood with cortisol and adrenaline sumping through my system. We’re going to be billed first at either the next all-staff or next D&S fortnightly, so at least something came good of it.

I wrote some prompt cards about working in the open, thanks to [@jukesie](https://medium.com/u/fb24db1416c3) for the inspiration. We checked in with the programme team which was all good. They’re happy with our progress and asked us to share our approach to check-ins with the rest of the programme, so I’ll build on those OKR slides and share here.

Took a Pedal Me bike taxi home, tested the PA system for livestreaming at the unconference, but found out that one key bit was missing. Poo. At least it was one less thing to worry about but I had really wanted to share Marty Cagan’s talk for people who were unable to attend.

### Five

Chatted to Bevan about an incident from Thursday. Fixing it nicely coincides with work we’re due to do next, so encouraged him to write up cards and pull the work through. Felt good to have some of the framework validated in real-life, based on real events. Had stand-up then went off to Geovation to get the unconference going. I’ve been working on this for a couple of months, so there were some butterflies in the morning, but they dissipated by the time I arrived – just really wanted it to work!

Was a little late but Jon, Marie, Anna-Marie and Alex had got going. We had a run-through of the day, and there was little left to sort out, but James was really helpful in shaping how to run the session voting. And we were really lucky that Geovation had some tech to get the livestream sorted! They had a Mevo which could stream direct to Vimeo – a massive relief!

People started arriving, we had pizza, everyone was hanging out, then we got started. The sessions were pitched well and lively. Really glad people engaged with it.

Marty turned up and was pretty chill. Nice bloke, and really nice of him to take time out to chat to us. It was an inspiring talk, as you might expect, and I was overjoyed that there was so much note-taking in the crowd. Let me know if you want to watch it, I’ll ping the link over. (Check cross-gov Slack in the #prodmgmt channel if you’re on there.)

Ended the day at the pub, a couple of glasses of wine, and a healthy chat with [Emily](https://medium.com/u/f30ef58c4490) on the Overground home. It was an incredible day!

## Reflections

### What I Learned

That I know what I’m doing.

I’ve not found myself suffering from imposter syndrome, and though it’s important not to be egotistical as a product manager, this week really felt like I was hitting my stride. Maintaining that flow while also keeping a healthy dose of humility about my work is now my focus.

### What I Could Do Better

Be ready to take on challenge from other team members, and not be phased by it. It’s my job to guide us, not set the work, so I might sometimes have to be Devil’s Advocate to my own plans in order to explore the team’s challenges.

## Bookmarks

- [It’s Too Late to Stop Trusting Facebook](https://medium.com/@dlberes/its-too-late-to-stop-trusting-facebook-2488cb76b9e)
- [Working notes on product management](https://medium.com/@s_m_i/working-notes-on-product-management-7353cd8b9964)