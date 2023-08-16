---
layout: post
title: "The Road Ahead"
sub-title: "Weeknotes S03E10"
date: 2019-03-30
description: "It's the end of quarter 4, 2018/19. We've done a heck of a lot and there's palpable excitement at what's to come next quarter."
image: /assets/images/NID_QUB_QUB_248.jpg
image_title: "The Road Ahead (study)"
image_artist: "Michelle Rogers"
image_source: https://artuk.org/discover/artworks/the-road-ahead-168950
image_credit: "Queen's University Belfast"
tags:
 - Weeknotes
---

It's the end of quarter 4, 2018/19. We've done a heck of a lot and there's palpable excitement at what's to come next quarter. Keep an eye out for the GOV.UK Roadmap 2019/20, which we're hoping to launch very, very soon. 

## Five Things That Happened

*We did more things than this*

### One

The end-of-quarter Show & Tell was really top notch and it was impressive to see how much teams had achieved during an intense political period. The EU Exit Voltron mega-team have managed to churn out heaps of goodness for people, and it's seriously impressive that Sam managed to turn the 'dynamic FAQs' request into 'No, but here's some improvements to Search'. 

Platform Health have managed to get concrete numbers on how much load the platform can put up with too, which means they can look at the architecture strategy going forward. Content Data have added reading time to their metrics, meaning you can find out how long it takes to read things like the [Budget 2018](https://www.gov.uk/government/publications/budget-2018-documents/budget-2018) (answer: 3h 26m). Filtered lists (we call those Finders) are more consistent, and a machine-learning algorithm has helped humans curate related links on pages, which other humans find useful.

I got to announce that we're saving taxpayers £35,000 a year off the back of our Search Resilience & Performance mission, and I wrote it on the side of a bus. Then I showed how we might (I must stress, might) personalise the experience of interacting with government, based on what we'd found from speaking to international governments and senior stakeholders. Next we need to find a politician willing to spend the political capital required to make a natively digital nation a reality in the UK. [^1]

And it was a boon to wrap up the quarter knowing that Government Communication Service and the [Chief Executive of the Civil Service](https://www.gov.uk/government/people/john-manzoni), amongst others, think that GOV.UK is staffed by cool and capable people. That this digital thing might just be a better way of working. 

### Two

Lee, a delivery manager, helped me by facilitating a recap session with the Explore Personalisation team. We asked ourselves what we'd learnt in our proto-discovery, to inform what recommendations we'd make to take the work forward. 

Our main finding: 'personalisation' is a fuzzy, poorly defined term and means different things to different people. The thing pictured in your head is not the same for everyone. Talk about value you'd like to create, not things you want to build.

But we have come up with some good opportunities worth pursuing in low effort, lean experimental ways. Testing the feasibility of features with something as simple as a button and a user research sign-up form takes minutes and can tell you a lot.

We started writing the blog post and report for this work and I can't wait to share that soon. It'll try to describe what personalisation is, how we're already personalising bits of GOV.UK, and what more we could do to personalise interacting with government.

### Three

Michael and Bruce did even more digging into Elasticsearch and how it orders results. Some logic around synonyms had been throwing the results, which we didn't expect and isn't documented as a change by Elasticsearch. The good news is that we're getting closer to being able to roll it out to Production fully, probably by Wednesday after we've uncovered the results ordering gremlin. 

### Four

I helped [Jon](https://twitter.com/JPForman86?lang=en), Head of Product Community, get to grips with publishing things on GitHub. He's come up with [things you need to do in order to learn and develop as an associate product manager](https://github.com/alphagov/Product-Managers-Learn-By-Doing), which he developed with [Scott Colfer](https://twitter.com/scottcolfer?lang=en). The first version is rather good and it's published in the open, meaning anyone can make comments and suggest additions or changes.

### Five

I settled on some development objectives which I'll publish and report on in the open. See below. They're designed to help me develop my skills in the [DDaT Framework](https://www.gov.uk/government/publications/product-manager-skills-they-need/product-manager-skills-they-need). Will report progress next week.

## Objectives

- Contribute to the GDS PM community
- Partner with delivery manager to run a multidisciplinary team (agile working)
- Clearly reflect user needs in the deliverables for missions (product ownership)
- Get the organisation to buy in to the product strategy inc. fellow PMs (strategic ownership)
- Get in front of users at least once per month (user focus)
- Realise the financial benefits of a proposed product decision (financial ownership)

## Bookmarks

- [Why we created a Platform Health team on GOV.UK](https://insidegovuk.blog.gov.uk/2019/03/27/why-we-created-a-platform-health-team-on-gov-uk/), 4 mins
- [At the dawn of GDPR, Nesta warns it is high time for data innovation, not just regulating ‘business as usual’](https://www.nesta.org.uk/news/at-the-dawn-of-gdpr-nesta-warns-it-is-high-time-for-data-innovation-not-just-regulating-business-as-usual/), 4 mins
- [Public deliberation could help address AI’s legitimacy problem in 2019](https://www.adalovelaceinstitute.org/public-deliberation-could-help-address-ais-legitimacy-problem-in-2019/), 5 mins

[^1]: I copied these words from a post on how to [make government as a platform real](https://public.digital/2018/09/25/making-government-as-a-platform-real/).