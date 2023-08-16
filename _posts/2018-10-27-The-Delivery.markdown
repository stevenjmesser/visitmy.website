---
layout: post
title: "The Delivery"
sub-title: "Weeknotes S02E03"
date: 2018-10-27
description: "There’s less busyness now that the unconference is out of the way, fewer things flying around my head."
image: https://cdn-images-1.medium.com/max/2560/1*eplQZzdeAAMFPiTF-CXoWw.jpeg
image_title: "Departure of the Night Mail"
image_artist: "Samuel John Egbert Jones"
image_source: https://artuk.org/discover/artworks/the-departure-of-the-night-mail-134288
image_credit: "The Postal Museum"
tags:
 - Weeknotes
---

Rather a happy week, on the whole, and much calmer than last week. There’s less busyness now that the unconference is out of the way, fewer things flying around my head. More thinking space to focus on day-to-day matters. Got this out the door early as I’m heading to [MozFest](https://mozillafestival.org) now, so tweet or telegram me if you’re heading there too. I’m planning on checking out [these things](https://twitter.com/stevenjmesser/status/1055787778267664384) on data, publishing, Semantic Web and more.

## Five Things That Happened

_We did more things than this_

### One

Four new associate product managers joined GDS recently. One has been with the organisation for a few years, but the other three are Fast Streamers. One of those Fast Streamers, Adam, actually joined as a developer – but they’ve placed him in a product role. As we’re trying to kick the buddying scheme back into life in the product management community, I spent an hour with him on Monday morning.

Ethics in human resources aside, he’s doing pretty well despite not having a background in the practice. He has started poring through [Ross](https://medium.com/u/bb88a6d5fb68)’s [reading list](https://docs.google.com/document/d/1BOzRg_e-qE24bYHSSKNFq5rUYca4U0rVeb5aG710kRo) and has caught a couple of blog posts online, to gain a footing, and it’s helping him in being able to answer questions and make decisions on his team. I wanted to make sure he had a good understanding of what product was and why it works, though, so went over the ‘Business, Tech, UX’ Venn diagram, the product lifecycle, how to use a lean canvas and _The Lean Startup_ approach to product development. He seemed much more chilled out at the end of our chat, and I offered him help whenever he needs it.

If he _can_ nail it, being a developer with a product manager head would be a huge advantage. There are many founders and CEOs out there with those skills, so this could be great for him.

### Two

The team swarmed on how scheduled publications work under the hood, and we set a service level objective (SLO) for that job. I’ll explain how we did that, but full credit goes to [Emily](https://medium.com/u/f30ef58c4490) for putting this technique.

We mapped the user journey for scheduling a page for publication, using a press release as an example. We drew out the steps horizontally, then noted beneath each step the applications and stack that powered that part of the journey. Next we listed the data points, or service level indicators (SLIs), between each step which verify the user can complete the job successfully. For example, the publishing application returns a 200, the publishing API has workers free to take the job, the content item is built and has an ID, etc. These SLIs in sequence form a pattern we can observe to know that users can successfuly schedule publications. We could monitor it constantly or only refer to it during an incident.

Finally, we needed to set an SLO: a measure of the performance of the service with a target for its performance. Each content item has a `publishing_delay` property which shows the time difference between when the user intended it to be published and when it was actually published. Over the last 3 months it has been 1–18 seconds on average during good spells, but if an incident occurs it has been known to max out at 3 days. Quite the delay! We decided that `publishing_delay` for each content item should be 1–59 seconds, meaning that our SLO is for pages to be published within the minute of schedulation.

### Three

Martin’s on holiday for two weeks, which means I’m the only PM on the team. It feels good to have temporary sole leadership of our team objectives, and it’s good experience to manage a team of our size. Though I have been leading on the pipeline work for some time, I don’t feel like I’m in Martin’s shadow this week.

We had our sprint planning which seemed to go well. People were enthused about working on pipeline stuff and didn’t have any questions about the sprint goals I’d set. So I think I’ve settled in! I know our domain, I’m hyped to work on a really technical team, and we’re doing cool things.

Our retro was pretty chilled too. The only significant problem we discussed was that using GPG for encryption was cumbersome and maybe we could change it! We’re working as a solid unit on Platform Health now, I’m really grateful to have my first go at running a large agile team with these people.

### Four

Did some planning of the quarter ahead and how we’ll meet our key results. This was mostly sticking up Post-its on our physical board for the initiatives we’ll need to complete, which meant we needed to iterate the workstreams we’d laid out in [S02E01](https://weeknot.es/the-launch-of-quarter-3-cf4e1b6ac614).

Though we’d initially chosen to list our key results as workstreams, it feels better to list the different classes of activity we’ll undertake to learn and make improvements. The three key workstreams are now:

*   Ideas and Research, to find out what we know, don’t know and need to know
*   Build and Test, to create or improve a thing and make sure it doesn’t break anything else
*   Measure and Learn, to set or test a benchmark and analyse whether our hypothesis has been validated

It’s the framework for a lean experimental approach mentioned in [S01E10](https://weeknot.es/the-finale-bda5ca81237c) and should help ensure we keep focussed on making proactive improvements to the pipeline, meaning we don’t get sidetracked by BAU reactive work and fixes.

Oh, we gave Tom a good send-off at the pub. Spent lots of time talking with Rob, our lead product manager until he heads of to productise an interesting new start-up. Half about work stuff and my ideas for the platform, but the other half just about personal life. Turns out we both have a fisherman for a father! Lots of time spent as a kid by a riverbank wondering when the fun would start.

### Five

Didn’t yet hear back from the recruitment team about the product manager vacancies at GDS, which is annoying as interviews are supposed to start on Monday. Perhaps they’ve had to knock it back – or maybe loads of superstars have applied! I’m fairly confident that I’ll get an interview based on what others have been telling me, but it’s natural to worry. Perhaps I’ll apply for the vacancy at HMRC which Alex mentioned or maybe the one at MOJ Scott has. I would really, _really_ like to stay at GDS though.

## Reflections

### What I Learned

Initiatives don’t have to fit neatly into key results, or you will have to do some work which spans across a couple of key results. Workstreams are themes of work.

### What I Could Do Better

I stormed into the SLO-setting session without much of a plan except what was in my head. I’ll need to firm that up for the next time we run a session, so that there’s less _umm_ing and _ahh_ing.

## Bookmarks

- [To fight fake news on WhatsApp, India is turning off the internet](https://www.wired.co.uk/article/whatsapp-web-internet-shutdown-india-turn-off)
- [Achieving Extraordinary Results with Ordinary People](https://www.martinlugton.com/achieving-extraordinary-results-with-ordinary-people-marty-cagan/)
- [Regulating for Responsible Technology: Introducing the Office for Responsible Technology](https://link.medium.com/VfkSxU6JgR)
- [How we used deep learning to structure GOV.UK's content](https://dataingovernment.blog.gov.uk/2018/10/19/how-we-used-deep-learning-to-structure-gov-uks-content/)