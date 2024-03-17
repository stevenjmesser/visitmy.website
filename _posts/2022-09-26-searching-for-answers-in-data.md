---
layout: post
title: "Searching for answers in data"
date: 2022-09-26
description: "Wouldn’t it be nice to use natural language to find answers to questions? Rather than trawling through heaps of datasets?"
image: /assets/images/IMG_0496.jpeg
image_title: "A marine compass. Condensation on the glass is making it hard to read the numbers"
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - General
 - Data
---

Today I saw something at [DataConnect](https://dataconnect.api.gov.uk/index) that got me very excited. Mainly because it’s work I’d like to re-use in a future work project, but also because it’s work that combined some areas I’ve got skills in.

The session was called [‘Searching for data, not just for datasets’](https://dataconnect.api.gov.uk/dc22/#3:00pm-to-3:30pm-Searching-for-data,-not-just-for-datasets) and is looking at making it easier to search for data. For example, if you want to answer the question ‘How many cars did the UK export last year?’, wouldn’t it be nice to search for *that*? You know, instead of having to

- find out which organisation publishes data about cars and where
- wonder whether their datasets about cars include data about exports too
- find the statistical release for the year you’re interested in
- get the data, work out that someone else entirely publishes data about exports
- bang the keyboard and start looking again

[Robin](https://twitter.com/robsteranium) and [Ross](https://github.com/rossbowen) showed how they’d been tinkering with Elasticsearch to make it return results from datasets in response to natural language queries (see the [prototype](https://search-prototype.gss-data.org.uk)). For a few queries I tried, the results it returned were iffy, but they’re collecting feedback on the results. (We systemised collecting feedback on the GOV.UK Search team and built a [search relevance tool](https://github.com/alphagov/govuk-search-relevance-tool) to help, so I shared that with them.)

They’re also working on making those results more findable by surfacing ontologies and classifications (in RDF) that describe the data to Google (in JSON-LD) – part of the [Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) and [how Google understands structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).

All of this got me excited because people use data (and other information) to answer questions. And Robin and Ross are working on making those answers more findable. Making answers to common research questions more findable is an area I expect to have to look at soon-ish.

Making those answers more findable inside a product will help our existing users, but making the answers findable on the web would be a [growth loop](https://www.reforge.com/blog/growth-loops). It would help us find new prospective users and help support our users’ community of practice.

I know that sounds like VC-backed, rocketship startup bullshit, so I should point out that it wouldn’t only benefit us. It would benefit the public good because these are common research questions, and people are already looking for our data to answer those. It shouldn’t be an arcane process to find this stuff.

To nab from Maggie Appleton’s [talk on data blocks](https://maggieappleton.com/block-data): better user experiences leads to better data science which leads to better decision-making tools.

*P.S. This note is squarely aimed at my future self, so that I come back to it if/when that project starts. But if this interests you too, drop me a line. Let’s chat!*

* * *

## Some history, for context

While hanging out some washing this evening, it occurred to me why I was so interested in this. TL;DR: I’ve got intellectual skin in the game. These problems have been part of my work for the last 8 years.

This stuff first interested me around 2014 or 2015 when I was working at [Porism](https://porism.com). I was tasked with increasing engagement with a reporting tool they’d built for councils, which helps council officers get statistical data about the people living in the council’s boundaries. The data helps support policy decisions and service design, so making it easier for people to use that data was a thing on my plate.

One issue was helping people get to grips with the tool. It’s pretty powerful, you can answer a lot of questions with it, but people found it hard to get started or to know how to ask their question. Engagement suffered as a result. There were lots of drop-downs and query builders and the like. The interface didn’t match users’ initial mental models.

But what makes the tool powerful are [the data standards behind it all](https://standards.esd.org.uk/), how it links together (for example)

- the concept of homelessness
- services related to homelessness
- legal duties related to homelessness
- data about homelessness

and links all that to other useful data like

- the age of homeless people in your area
- the number of people in different age ranges in your area

so that you can do some analysis.

The problem was all about making answers to questions findable, but by the time I got close to having the skills to answer it (through product management and user-centred design), I’d moved on to work at GDS.

While at GDS, I looked after GOV.UK’s site search for a year. I wrote about how we were going to [make site search work smarter for users](https://insidegovuk.blog.gov.uk/2019/07/05/making-site-search-work-smarter-for-users/) in order to make results more relevant to a user’s query. It meant I got pretty deep into indexing strategies, taxonomies, and the similarity of words. But we looked at interaction patterns and common components in search experiences too. It’s all about making things more findable.

Our work on personalisation was about findability too, but also about better, more targeted service provision.
