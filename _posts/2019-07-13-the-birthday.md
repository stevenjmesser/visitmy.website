---
layout: post
title: "The Birthday"
sub-title: "Weeknotes S05E01"
date: 2019-07-13
description: "It's my weeknotes first birthday! 🎉 And we launched the new quarter working on GOV.UK's site search."
image: /assets/images/3387601234_c958def831_b.jpg
image_title: "Digital Funfair"
image_artist: "Steve Messer"
image_source: https://www.flickr.com/photos/renegatus/3387601234/sizes/l
image_credit: "Steve Messer"
tags:
 - Weeknotes
---

It's my weeknotes first birthday! 🎉 As I said [last July]({% post_url 2018-07-14-The-Reshuffle %}), reading people’s weeknotes was one of the main inspirations for me to join Government Digital Service and I hope my ramblings might have inspired others to work in public service. Massive thanks to [Jukesie](https://digitalbydefault.com/about/), [Dan](http://danbarrett.posthaven.com), [Sam](https://medium.com/@stamanfar) and [Jonathan](https://www.caffeinatedpunctuation.co.uk) for inspiring me in the first place. 

## Five Things That Happened

*We did more things than this*

### One

We kicked off quarter two 2019–20! I'm continuing as product manager for GOV.UK's site search working with a team of excellent developers, performance analysts, a data scientist and a designer to make site search work smarter for users. I've explained what that means in a [blog post](https://insidegovuk.blog.gov.uk/2019/07/05/making-site-search-work-smarter-for-users/), but there's three immediate problems to fix.

> I also wrote about [how I kick off new quarters with a product team]({% post_url 2019-07-07-kicking-off-new-quarter-with-your-product-team %}).

#### Search results relevancy

58 per cent of searches on GOV.UK provide decent results with most users clicking one of the top 3.18 results, but results for the remaining 42 per cent range from OK to Awful. We're going to make that better.

But why 3.18? Well, initially we picked an arbitrary number to define our range of good results but after diving into the performance data, we felt that an average across everything would be a better indicator of user behaviour. 

We're aiming to make results better for queries like ['take my pet abroad'](https://www.gov.uk/search/all?keywords=take+my+pet+abroad&order=relevance), ['change my licence'](https://www.gov.uk/search/all?keywords=change+my+licence&order=relevance) and ['statement on libya'](https://www.gov.uk/search/all?keywords=statement+on+libya&order=relevance) which have some oddities amongst the OK results (see if you can spot them!). To do this, we're tweaking our search engine and algorithm and using multivariate (A/B) testing to compare the performance on live searches.

#### Accessibility on mobile

The search experience on GOV.UK is fragmented – it’s just not consistent across the site or across devices. We’ve started work on this before but not been able to finish it, meaning the frontend is bulky and performs particularly badly on mobile phones. 

![GOV.UK's site search on a mobile phone, showing how search results are below the fold](/assets/images/govuk-site-search-on-mobile.png)

This is bad because the number of searches performed on mobiles has increased by 19 per cent from 6,345,649 sessions in 2017 to 7,574,196 sessions in 2018  – [a trend we see across the entire website](https://www.gov.uk/performance/site-activity/device-type). 

So we’re going to apply Mark’s new designs taking a holistic view across the site, and make our search frontend accessible before the [new regulations](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps) require us to in 2020. 

#### Site search is 'dumb'

People’s mental models for how search should work are set by Google, and through the [Voice work](https://gds.blog.gov.uk/2018/08/23/hey-gov-uk-what-are-you-doing-about-voice/3) we've learned more about how people ask questions of government.

However, we don’t get analytics from voice assistants; we can’t see charts for what people are asking Alexa, Siri and Google Assistant. 

We can, though, see that users are asking intelligent queries in site search, like '5 months pregnant and homeless need help'. They're also using different words for the same concepts. For example, 'pregnant and not working' is the same as 'pregnant and unemployed'. 

By supporting that behaviour and analysing those queries, we’ll learn both how our content could be structured and how our information architecture can be optimised to feed those types of query: whether through external search engines, voice assistants, API calls from third-party applications or websites, etc. 

### Two

We had our first planning session of the quarter. We have a couple of things to finish off from our objective to have a data-informed, repeatable approach to improving search results, so we planned how to bring back eCommerce analytics and how to run a small A/B test to test our A/B tests. 

Usually I'll write cards for pre-planning, show them to some team leads, and then tweak those based on comments back. But this week we tried something different – and arguably what's supposed to happen in planning. (At least, that's what I was taught and have done elsewhere, but haven't done yet at GOV.UK.) 

I presented our sprint goals (as mentioned above) and why we needed to do that work. The team then broke down how we'd actually do it, listing all the dependencies, preparatory work, spikes, etc. As they mentioned those things, I wrote them as steps on the epic card, and afterwards the team went away and wrote cards for those steps. Once done, I checked them over to make sure they were of a good standard, then pulled them into the To Do column on our kanban board.

It felt good doing it that way. Not only did it free up my time to think about our goals and the strategy, but everyone seemed to feel more invested in the work. Since this quarter is more about delivering outcomes rather than shipping stuff, it'll be a great way to work. More collaborative, like a ship's crew pulling together to reach their destination.

### Three

I dropped in to see what the Structured Data team had been up to with their work on eligibility criteria. Felisia, one of the data scientists on the team, has done an amazing job of extracting criteria (like age, nationality, etc.) from the [mainstream pages](https://www.gov.uk/browse). They're moving on to other concepts shortly but this was an initial check that the approach worked. I think they've been using the [Circumstances list](http://id.esd.org.uk/list/circumstances) to identify concepts, as you might as well [borrow or buy ontologies](https://www.forbes.com/sites/cognitiveworld/2019/05/07/ontologies-borrow-build-or-buy/) where you can, rather than build them anew.

### Four 

Had a few beers with public service legend [Trilly Chatterjee](https://twitter.com/TrillyC). He's a top guy. We chatted about work stuff, obvs, but also cybernetics, comics and graphic novels, physics, sailing analogies, being a chef, heritage, belonging and loads of other stuff. We meant to go along to [Sam's picnic](https://twitter.com/stamanfar/status/1149448592920403969) but got wrapped up in convo.

> Turns out that [the blog I started in 2012 for Jonathan Cape Graphic Novels](https://capegraphicnovels.tumblr.com/) is still going. Proud of that.

### Five

Got the chance to chat to [Giles Turnbull](https://gilest.org/about.html), who's another public service legend. His [agile communication tips](https://gilest.org/agile-comms-tips.html) are essential reading – seriously, bookmark them all and devour them, once a month – and I think has done more for internet-era ways of working than he realises. Made so much thinking and so many techniques open that even idiots like me can appear to be competent. 

## Bookmarks

- [Making product ownership a priority](https://www.dxw.com/2019/07/making-product-ownership-a-priority/), 3 mins
- [“It isn’t about the technology…”](https://notbinary.co.uk/it-isnt-about-the-technology/), 3 mins
- [Pitfalls of Continuous Product Discovery](https://www.linkedin.com/pulse/pitfalls-continuous-product-discovery-thoughts-134-tim-herbig), 5 mins
- [Product managers should not build the roadmap. The product team should](https://www.intercom.com/blog/product-managers-should-not-build-the-roadmap/), 6 mins
- [Coaching – Owner vs. Employee](https://svpg.com/coaching-owner-vs-employee/), 6 mins
- [BBC Box rewriting the future of the internet](https://www.ibc.org/tech-advances/bbc-box-rewriting-the-future-of-the-internet/3998.article), 3 mins
- [Culture is our strategy](https://dfedigital.blog.gov.uk/2019/07/08/culture-is-our-strategy/), 4 mins
- [Design sprints need iteration](https://www.invisionapp.com/inside-design/design-sprints-need-iteration/), 6 mins
- [Why search is no longer all about Google](https://www.bbc.com/news/technology-48866151), 4 mins
- [Don't say you're a “thought leader” just show you can think](https://gilest.org/thought-leadership.html), 2 mins
- [Come so far – got so far to go](https://notbinary.co.uk/come-so-far-got-so-far-to-go/), 3 mins