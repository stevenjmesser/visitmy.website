---
layout: post
title: "The Relief"
sub-title: "Weeknotes S03E11"
date: 2019-04-06
description: "We launched a thing and saved taxpayers money, found out the missions for next quarter, and I've prepped a presentation on blogging and working in the open."
image: /assets/images/DEV_NDMM_2001_55.jpg
image_title: "The Relief of the 'Investigator', 1853"
image_artist: "Mark Richard Myers"
image_source: https://artuk.org/discover/artworks/the-relief-of-the-investigator-1853-95459
image_credit: "North Devon Maritime Museum"
tags:
 - Weeknotes
---

We launched a thing and saved taxpayers money, found out the missions for next quarter, and I've prepped a presentation on blogging and working in the open. A decent week considering I spent all of it at home, working in the lounge, with a rotten cold and many sniffles. 

## Four Things That Happened

*We did more things than this*

### One

We completed the search migration! 🎉 All applications are now using [Search API](https://github.com/alphagov/search-api) in all environments, meaning better search latency, an improved architecture for resilience, and we can start exploiting the new features in Elasticsearch 5.6 (and beyond). It's saving taxpayers around £35,000 per year too, which is a Good Thing. 

We were able to roll it out in good fashion too. An [incident](https://status.publishing.service.gov.uk/incidents/s0fj6yqdz6wp) fired up on Tuesday which was throwing hundreds of `500` errors and it was proving tricky to get to the root cause. We were on the verge of rolling out anyway but were doing some final checks on search result ordering. All results were coming through as expected or with minimal variance in their ordering, except for organisation pages which were showing a strange behaviour – but not so strange that the user experience would be massively degraded.

So we did a quick check on the top 10,000 search terms and decided it was fine to go ahead. It took barely any time at all and the `500` errors started dropping soon after. By the next day, they'd dropped even further, and as [Michael](https://twitter.com/barrucadu) pointed out, having Rummager running alongside Search API was a good way to see how much better the new infrastructure is at clearing the job queues.

A good win for the week.

### Two

The teams for Q1 2019/20 have been announced. I'm going to be leading a team looking at making GOV.UK's site search better for users and optimising our pages for other search engines through semantic markup. I'm also going to be a consultant product manager on a team looking at how GOV.UK can best implement structured data and graph technology, which follows on nicely from some of the Explore Personalisation work. 

This is hugely exciting for me as I've been advocate of semantics and structured data ever since [Mike](https://twitter.com/MikeThacker/) schooled me at [Porism](https://porism.com), but I'll still be looking at user behaviour on the website through search, where people feed their mental models into our system through language. There's a massive opportunity to observe a shift in search behaviour as people move away from keyword searches towards asking full questions. (I assume that's what might happen anyway.) 

We're also going to be able to release some Big Bang features too, which users have been asking about for a while. Most people expect site search to work like Google, so I'm hyped to explore how we do that whilst maintaining a high degree of user privacy.

I'll be encouraging the team to share our findings through livestreamed Show & Tells and I'll promote these to local government audiences (in the main) as they might find the outputs useful. [Sign up](https://forms.gle/p2v1a2uTSW33KapV6) to receive a link to the stream as we're due to go live.

### Three

Planning how to kick-off the new mission was really fun. I pored through a bunch of [John](https://twitter.com/johncutlefish)'s articles as I like his style for promoting a learning culture and focusing on user behaviour. It meshes with GDS's 'Users First' dogma quite nicely but encourages a level of experimentation you don't often hear about outside the Discovery-Alpha-Beta-Live lifecycle. 

I'll write up my approach here, see what you think.

---

#### Behaviour change
Whose behaviour are we hoping to change? Which behaviours do we hope to change? This will help us consider _who_ is using search and _what_ needs to be improved.

Once we know whose behaviours we’re going to change and how they currently use the thing, we can better know _how_ we think we’ll change those.

#### Ideas
We all probably have ideas for what to do. Things we can build. Avenues to explore. We can set those hypotheses later, once we’ve all shared some learning.

#### What we know now
What do we each need to learn 

- about our users, 
- why they search, 
- how they search, and 
- how search works in order to proceed?

Shared understanding now will help massively later. (And it’s possible that I need to learn the most!) Do we have a backlog or institutional knowledge? Do those need updating?

#### Hypotheses

Now we’re on the same page, what assumptions do we have? How will we validate or invalidate those? (Experiments or research.) What outcomes do we expect to bring?

#### Success

How will we know when we’re done and measure success? What metrics and KPIs do we have that show people are getting what they need? Do we have a North Star? How does that relate to GOV.UK’s goals and vision?

---

As ever, please do [tweet me](https://twitter.com/stevenjmesser) with thoughts and feedback. 

### Four

Since I'll be speaking at the GDS product management community meet-up on Monday, I finished off my presentation on [blogging and working in the open](https://docs.google.com/presentation/d/11POnQ_qVz6WX6wr3eU_KW0sZy6BL1SFtR8hqdfNsWrs). Lots of nice people offered to read it and provide comment, so it has been refined slightly, but it says what I want. The aim is to encourage people to blog more about the work they do, because [the frequency of blog-posting has dropped](https://daibach.uk/2018/02/state-blogging-digital-government/) but people still deserve to know how their taxes are being spent.

I've just realised that I haven't included that line in the slides...  

## Objectives

How did I perform against my objectives this week? 

| What | How |
| --- | --- |
|Contribute to the GDS PM community|Prepared a presentation on blogging and working in the open|
|Partner with delivery manager to run a multidisciplinary team (agile working)|N/A this week|
|Clearly reflect user needs in the deliverables for missions (product ownership)|Mission kick-off focuses on identifying and improving user behaviours|
|Get the organisation to buy in to the product strategy inc. fellow PMs (strategic ownership)|N/A this week|
|Get in front of users at least once per month (user focus)|N/A this week|
|Realise the financial benefits of a proposed product decision (financial ownership)|Saved taxpayers £35,000 a year by migrating search functionality to a managed service|


## Bookmarks

- [Weeknotes: 028](https://memo.barrucadu.co.uk/weeknotes-028.html), 2 mins
- [How to Frame Your Product Vision](https://www.producttalk.org/2011/12/how-to-frame-your-product-vision/), 3 mins
- [Beat the Feature Factory: Run Pre-cap Design Studios](https://medium.com/@johnpcutler/beat-the-feature-factory-run-pre-cap-design-studios-725d1c83ecd7), 3 mins
- [S.I.M.P.L.E. before S.M.A.R.T.](https://grasshopperherder.com/s-i-m-p-l-e-before-s-m-a-r-t/), 3 mins
- [Do This Now: 8 Ways to Focus your Product Team on Impact, Not Features](https://amplitude.com/blog/focus-product-team-on-impact), 7 mins
- [Discovery: Embracing the unknowns](https://www.dxw.com/2019/02/discovery-embracing-the-unknowns/), 3 mins
- [For data-savvy marketers, there’s a new keyword: Intent](https://www.technologyreview.com/s/612244/for-data-savvy-marketers-theres-a-new-keyword-intent/), 6 mins
- [At Cosmopolitan Magazine, Data Is the New Sex](https://www.nytimes.com/2019/04/05/style/cosmopolitan-magazine-jessica-pels.html), 10 mins
