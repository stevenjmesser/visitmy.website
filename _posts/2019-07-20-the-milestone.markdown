---
layout: post
title: "The Milestone"
sub-title: "Weeknotes S05E02"
date: 2019-07-20
description: "This week, it felt like we achieved something by reaching a milestone. Here's to gradual, iterative progress!"
image: /assets/images/4827035705_985503550e_b.jpg
image_title: "Untitled"
image_artist: "Steve Messer"
image_source: https://www.flickr.com/photos/renegatus/4827035705/sizes/l
image_credit: "Steve Messer"
tags:
 - Weeknotes
---

This week, it felt like we achieved something by reaching a milestone. We've proven a technology can work, now we just need to prove it can help us reach an outcome. It wasn't a common week as some team ceremonies didn't happen, but that's OK: they don't need to happen on a strict cadence, especially when we haven't finished the last sprint. Super proud of the team though, they're going to start making waves soon. Big ups, you lot.

## Four Things That Happened

*We did more things than this*

### One

We successfully launched an A/B test on live site search! 🎉🆎 It's a huge step forward for the team. It means we'll be able to test our proposed changes to the search algorithm and see how they perform, based on live analytics. This first test was to see whether [our A/B testing framework](https://docs.publishing.service.gov.uk/manual/ab-testing.html) could work for multivariate testing on search, but turns out it can.

On Monday we're planning to run another test, dialling up from a 95/5 split between the A cluster and B cluster to 50/50. We're taking it easy because no one's done this before on GOV.UK, but I can't imagine it not working. We did some work in April (see [S04E01]({% post_url 2019-04-15-the-fishing-smacks %})) to make our search stack more resilient, so I think we can afford to be bold. 

That said, we'll not run any tests past Tuesday as [next week in Parliament](https://www.bbc.co.uk/news/uk-politics-parliaments-49046432) could see a shake-up to Government and we get increases in traffic when that happens. Best hold off on that one.

### Two

We had a session to discuss and agree on our [OKRs]({% post_url 2019-02-21-how-we-use-okrs-gov-uk %}) as a team. There's a couple we need to workshop a little more, and I need to write an objective for the mobile design work, but the key results we settled on were

- the number of search queries clicking on results in the top 3.18 results increases from 58% to 70%
- our precision score (the number of relevant results on the first page) will increase by 5%, and
- click through results will increase from 70% to 80%

The numbers are lines in the sand, loose estimates that will prove their worth if we achieve them. From there we can better set new numbers because we'll know our direction of travel and rate of acceleration. 

Our thinking is that more clicks on the top 3.18 results for all queries is an indicator of improved relevance; that users indicating that results are more precise shows an improvement too; and that fewer searches where users don't click a result shows in improved experience overall. 

I'm really looking forward to our manual judgement tests, asking users to plot relevance vs precision, inspired by [Google's search quality tests](https://www.google.com/search/howsearchworks/mission/users/). It'll help us baseline our readings of the performance data against some qualitative responses (albeit captured through numbers!). Really grateful that Harriet and Suganya thought of that.

### Three

Jeremy ran a [design crit](https://designnotes.blog.gov.uk/2019/04/08/how-a-cross-government-design-crit-day-helps-your-work/) on the search UI designs, to help us expose gaps in the designs by running them past real people. We're working with paper prototypes at the moment so it's a good way to test things early on. We got a boat-load of useful feedback and things to consider.

Then Andy and Jeremy ran the designs past Anika, on the Accessibility team, to get us thinking about where the designs might fall foul of the new WCAG 2.1 criteria. There was a lot to take in and I'm not sure anyone's met the criteria for such a complex interface yet, so we're possibly doing some really hard work. Hopefully we'll be able to share the benefits for other teams. 

Next week we'll need to prioritise our work as it'll be easy to get lost in the weeds. I feel as though making search work better on mobiles is our main goal, the desktop UI can follow suit. But perhaps we need a bit of data to see where the problems lie...

### Four 

Thursdays are reserved for work on the Permissions team, following on from our work exploring personalisation a few months ago. I worked with my delivery manager, Hong, to shape our kick-off session and scope the mission. (We're not getting started until our service designer is back from his hols.) We suffered by the last mission feeling so nebulous, meaning it's _really_ important to set the scope right. We've gone for something ambitious but not too distant, it feels just the right thing to be working on at this moment in web history. 

I'll not reveal it now as I haven't been able to share it with the team yet. [Follow updates to my weeknotes](https://visitmy.website/feed.weeknotes.xml) if you want to stay abreast of this. There will probably be official announcements too.

## Bookmarks

- [How the 2019 coffee crisis might affect you](https://www.bbc.com/news/world-us-canada-48631129), 6 mins
- [Even Donald Trump is dumping on Facebook’s digital currency dreams](https://www.technologyreview.com/s/613950/donald-trump-facebook-libra-digital-currency-dreams/), 3 mins
- [Facebook’s $5 billion FTC fine is an embarrassing joke](https://www.theverge.com/2019/7/12/20692524/facebook-five-billion-ftc-fine-embarrassing-joke), 3 mins
- [The NAO has missed an important point about citizen data](https://tech.newstatesman.com/gdpr/nao-government-data), 3 mins
- [Design to explain what you’re doing with data](https://www.projectsbyif.com/blog/design-to-explain-what-youre-doing-with-data/), 3 mins
- [Looking at the BBC's role in data-led services](https://www.bbc.co.uk/blogs/internet/entries/78948980-e1e6-48fe-918a-c9bb5f2a0719), 3 mins
- [Privacy is a commons](https://techcrunch.com/2019/02/10/privacy-is-a-commons/), 3 mins
- [For stronger data rights we must start with a shared language of data](https://theodi.org/article/for-stronger-data-rights-we-must-start-with-a-shared-language-of-data/), 7 mins
- [How (not) to radiate intent](https://medium.com/@markdalgarno/how-not-to-radiate-intent-496af72a630b), 3 mins
- [We urge UK government to overhaul its use of data](https://theodi.org/article/we-urge-uk-government-to-overhaul-its-use-of-data/), mins
- [Interoperability: Fix the Internet, Not the Tech Companies](https://www.eff.org/deeplinks/2019/07/interoperability-fix-internet-not-tech-companies), 8 mins
- [Release of Data Mobility Infrastructure Sandbox Report](https://www.ctrl-shift.co.uk/news/2019/06/17/release-of-data-mobility-infrastructure-sandbox-report/), 7 mins
- [FaceApp responds to privacy concerns ](https://techcrunch.com/2019/07/17/faceapp-responds-to-privacy-concerns/), 4 mins
- [Making products for other people](https://www.idean.com/spotlight/making-products-for-other-people), 4 mins
