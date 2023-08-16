---
layout: post
title: "The Fishing Smacks"
sub-title: "Weeknotes S04E01"
date: 2019-04-15
description: "The first week of quarter one, 2019/20, was fairly decent overall. A stormy week with calm moments, a veritable feast of ups and downs. Goods. Bads. In-betweens."
image: /assets/images/CBR_THMA_1977_107.jpg
image_title: "Fishing Smacks and Sailing Ships on a Stormy Sea"
image_artist: "George Sheffield Junior"
image_source: https://artuk.org/discover/artworks/fishing-smacks-and-sailing-ships-on-a-stormy-sea-144632
image_credit: "Tullie House Museum and Art Gallery"
tags:
 - Weeknotes
---

The first week of quarter one, 2019/20, was fairly decent overall. A stormy week with calm moments, a veritable feast of ups and downs. Goods. Bads. In-betweens. It's been fascinating to hear from people across government asking me questions about search and GOV.UK, so don't be a stranger if you read these. I'm always happy to chat and glad if these provide others value. 

Finished reading _The New Dark Age_ too, which is bloody great. Go and buy it if you haven't already.

## Five Things That Happened

*We did more things than this*

### One

So after a rolling out our upgrade to solve an incident, it turned out that a few more incidents followed. It didn't feel great but we had some validation in analysing the problem and learning that we weren't the only cause. Actually, there were quite a few complex problems. 

Despite doing the calculations on good data, the Elasticsearch machines were slightly under-provisioned, as were the search-api machines. This meant that there was a lower flow rate than usual and jobs weren't passed between the machines as quickly as usual. On top of that, some new features on finder-frontend added significant overhead to its processes, and an A/B test was pushing tons of traffic through to the origin servers. (Michael has explained it in [more technical detail](https://memo.barrucadu.co.uk/weeknotes-030.html).)

Basically, the entire search stack was being overloaded unprecedentedly. It was the embodiment of 'Move fast, break things', but really that's the worst thing to do during a tense political time. 'Move fast, spark joy' should be our mantra right now. I'm hoping we can improve our testing suite, where needed, and that other teams will be good citizens in future by running performance testing on new features.

Need to run the sums again but the money we've saved taxpayers will probably have decreased now.

### Two

The kick-off for Search & Navigation went pretty well. Most people seemed to get behind the ethos of pushing for behaviour change, not creating a feature factory. It really excited our senior user researcher, Louise, who's overflowing with excellent knowledge about how people find things. We've got a huge opportunity to add value to site search.

Another session with the team later in the week was valuable too. I ran through their icebox to see which features might give users value with minimal effort, but everyone was keen to learn more about users – how we measure user value, especially – before releasing anything. It was really great to hear, as everything we do should be rooted in solving validated user problems. 

It's not easy joining a team with an established culture but everyone has been welcoming and open to our objectives. That said, the objectives are pretty fluffy at the moment, but we'll be giving them more definition as the weeks progress.

### Three

The unconference was really good, especially Jen's talk on the future of GOV.UK. A few of our findings from Explore Personalisation had snuck their way in – people seemed to react well enough. Jen essentially did our presentation but way better, so we're going to chat to her this week about binding the narratives.

### Four

My presentation on [blogging and working in the open](https://docs.google.com/presentation/d/11POnQ_qVz6WX6wr3eU_KW0sZy6BL1SFtR8hqdfNsWrs) went well. I followed up with a [tweet](https://twitter.com/stevenjmesser/status/1115316176740134912) which went a bit viral, I hope in support of blogging in public service. I started writing a blog post about that, a better-worded version of the presentation, but the gremlins on my computer ate it. 

I repeated Dai's work and counted [how many blog posts have been published on the GDS blogs](https://docs.google.com/spreadsheets/d/1KsmJcir_ZedxB4gV5sVX2whB2M6c15Px0VargcQpHNY/edit#gid=1947375863), which, as you'll now doubt expect, have been trending downwards. Having said that, quality is more important than quantity, and the Head of Editorial has [blogged previously](https://gds.blog.gov.uk/2018/02/22/making-sure-our-blogging-meets-user-needs/) about prioritising impact over excess. I pulled the analytics data and ran a quick analysis, which shows that engagement has increased despite the number of posts not remaining constant. Clearly the measures aren't directly related.

So while I still think people need to blog more, it's not a case of going back to blogging three times a day, like the early days. Once a week, telling stories from product teams, would be nice. (And thank you to everyone across government who's asked me about search in the last week, I didn't know so many people read my weeknotes!)

### Five

I completed assessor training, so I'm on my way to being a lead assessor on service assessments. I'm looking forward to working with service teams across government tackle users' problems.

## Objectives

How did I perform against my objectives this week? 

| What | How |
| --- | --- |
|Contribute to the GDS PM community|Presented on blogging and working in the open to the community|
|Partner with delivery manager to run a multidisciplinary team (agile working)|Teamed up with my DMs to organise the Q&A session and plan events for the following week|
|Clearly reflect user needs in the deliverables for missions (product ownership)|Mission focuses on identifying and improving user behaviours|
|Get the organisation to buy in to the product strategy inc. fellow PMs (strategic ownership)|Working on this one|
|Get in front of users at least once per month (user focus)|N/A this week|
|Realise the financial benefits of a proposed product decision (financial ownership)|N/A this week|


## Bookmarks

- [Why there’s so little left of the early internet](http://www.bbc.com/future/story/20190401-why-theres-so-little-left-of-the-early-internet), 9 mins
- [Your Mission Is To Produce Outcomes, Not Outputs](https://barryoreilly.com/your-mission-is-to-produce-outcomes-not-outputs/), 3 mins
- [Towards a simpler, smaller, nimbler, cheaper, better GOV.UK](https://gds.blog.gov.uk/2011/04/28/jfdi-gov-uk/), 3 mins
- [The value of user needs – iterate](http://www.iterate.org.uk/the-value-of-user-needs/), 7 mins
- [Key Experience Indicators: How to decide what to measure?](https://medium.com/@tsharon/key-experience-indicators-how-to-decide-what-to-measure-8b948a6a86b9), 4 mins
- [How Do I Know When I’m Done with Customer Discovery?](https://grasshopperherder.com/how-do-i-know-when-im-done-with-customer-discovery/), 5 mins
- [What is behavioural insights?](https://apolitical.co/solution_article/what-is-behavioural-insights/), 9 mins
- [Life Rewired Reads #1](http://www.barbican.org.uk/liferewired-jamesbridle), 7 mins
- [Life Rewired Reads #2](https://www.barbican.org.uk/liferewired-jamiebartlett), 7 mins
- [Stop Letting Modern Distractions Steal Your Attention](https://www.nytimes.com/2019/03/26/smarter-living/stop-letting-modern-distractions-steal-your-attention.html), 5 mins
