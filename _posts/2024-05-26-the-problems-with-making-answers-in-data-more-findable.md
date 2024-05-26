---
layout: post
title: "The problems with making answers in data more findable"
date: 2024-05-26 18:49:12+01:00
tags:
 - Data
---

_Note: I wrote this way back in October 2022, when I was still working on the [Secure Data Environment](https://digital.nhs.uk/services/secure-data-environment-service) at NHS England. I’d started thinking about ways we could make the analyses performed inside the environment repeatable and re-usable, speeding up the time it takes for researchers to go from a hypothesis to an answer. Now that I’m working on the [planning data platform](https://www.planning.data.gov.uk), I figured I’d get it published as there’s some ideas in here that may work._

A while ago I got excited and [wrote about]({% post_url 2022-09-26-searching-for-answers-in-data %}) work happening in the government data science community to make it easier to search for data. Those notes were for my future self, a version of me in 6–12 months’ time. My clairvoyant skills are lacking, though, and I need to share this thinking sooner.

At this point, I should make it clear that I’m sharing this speculative idea in order to gather feedback. It’s a hypothetical solution to a problem I’m not even sure exists, so let me know where it’s right or wrong.

Having said that, there are projects looking to solve these problems out there. Those projects are academic or technology-driven. I’m taking a user-centred design and product management approach, which means looking at assumed problems and validating those.

The problems that I assume exist are:

1. It’s hard to find datasets as a researcher, analyst or data scientist
2. Not all users have the coding expertise needed to get answers from data
3. Mechanisms for sharing code exist, but those aren’t always suited to (or safe for) analysis of government or health data
4. For most people, Google is the first port of call for solving problems 1, 2 and 3

## Problem 1: It’s hard to find datasets as a researcher, analyst or data scientist

We know that problem 1 exists. In 2018, Laura Koesten and Emilia Kacprzak [gave a talk](https://www.youtube.com/watch?v=VNTtzZdqFIs) at the Open Data Institute’s offices. They looked at how people ask questions, how users search for datasets, and identified a gap. Subsequently, they proposed a vision: ‘[One day] searching for data will be as easy as searching for websites, images, maps, flights...’ As they describe, the problem to overcome is how data isn’t as descriptive as text, but [GSS’s search prototype](https://search-prototype.gss-data.org.uk) looks to make this easier.

Being able to find a dataset to answer your question is great, but you’re having to search inside the prototype: a walled garden. How might we make these results available to the open web, so that they can be indexed by other search engines?

The prevailing procedure is to publish statistical releases and datasets, and those get indexed by Google et al. But that doesn’t work in the modern world of web search. Though web pages are documents, people aren’t looking for documents in Google, they’re looking for things or answers:

> Documents aren’t just documents but restaurants, products, news articles, tweets, doctors’ offices, and many other things.[^1]

A document about a restaurant doesn’t feel like a document inside a list of search results. To users looking to find a restaurant, that document is the answer they were looking for: the restaurant.

### Hypothetical solution to problem 1

Following this thinking, publishing questions or answers as the findable content – alongside a statistical release – feels like a way forward.

## Problem 2: Not all users have the coding expertise needed to get answers from data

We know that problem 2 exists. In the Quantifying the UK Data Skills Gap report, DCMS surveyed businesses that hired for data skills and their employees. 68% of businesses said that programming skills (a ‘hard data skill’) were important for their data roles, which is [low down on the full list of hard data skills](https://www.gov.uk/government/publications/quantifying-the-uk-data-skills-gap/quantifying-the-uk-data-skills-gap-full-report#the-demand-for-data-skills#hard-skills-are-also-lacking-particularly-information-management-and-knowledge-of-emerging-technologies). When their employees were asked to rate their performance of programming skills, 27% felt they performed very or somewhat well[^2]. 

Loads of people in data roles feel like they’re average or poor at programming.  This is an insight we uncovered in research with the Secure Data Environments’s userbase too. 

But there is hope. Work on [reproducible analytical pipelines](https://dataingovernment.blog.gov.uk/2017/03/27/reproducible-analytical-pipeline/) points towards a future where analyses (and the code to run them) can be shared and re-used. Instead of having to write code to perform an analysis, you could take someone else’s analysis and plug it into your project. 

### Hypothetical solution to problem 2

A place where people can find and re-use code to run analyses on datasets, to ask specific questions, would help people cross the programming skills gap. It might even help them become more familiar with programming over time.

## Problem 3: Mechanisms for sharing code exist, but those aren’t always suited to (or safe for) analysis of government or healthcare data

This is all about context. If you’re working on a dataset about government services or healthcare, asking a question on Stack Overflow isn’t that easy. For example, you can’t say ‘How do I work out how many people in Manchester owned cars in 2019?’ You’d have to ask your question in the abstract: ‘How do I perform a join on datasets? What identifier represents the statistical geography of Manchester? How do I exclude rows from a particular time series in my results?’

Stack Overflow isn’t the only place to go either. There’s Reddit, Slack workspaces, the people you work with, forums for researchers... There’s all sorts of places you could _try_ getting an answer to your question, but you can’t guarantee people will know what you’re on about. Asking those people to ‘jump on a call’ and help you out might not be appropriate either, particularly if you’re working on datasets with access controls.

What would be great is if those people could share code with you, but your chances of finding those people are low. The communities on the internet are too general for people working on government or healthcare data, and this came up in research with our users too.

### Hypothetical solution to problem 3

A community of researchers, analysts and data scientists working on government or healthcare data would provide the ideal place for people to ask questions, for others to provide answers, and for code-sharing to happen between the parties. All context-specific. A place where you know you can get detailed answers or even re-use someone’s code.

## Problem 4: For most people, Google is the first port of call for solving problems 1, 2 and 3

Let’s assume the above statement is true. Even though [people are using Google to find answers on Reddit](https://dkb.io/post/google-search-is-dying) – so much so that [Google is taking efforts to index more discussions and forums](https://9to5google.com/2022/09/28/google-search-discussions-forums/) – a high proportion of people using the web find answers to questions through Google, the most popular search engine. 

And when you think about what Google is doing to index more discussions and forum posts, it must also be doing work to link relevant answers to questions. (You can also use schema markup to help Google find answers in your documents.)

### Hypothetical solution to problem 4

Use semantic markup to highlight research questions and answers on webpages about datasets, shared code, facts in datasets. This can be indexed by Google and other search engines to be made findable.

_Note: This was written before large language models had hit the mainstream, and there’s certainly work to be done to make facts available to those models. But the point here is to get the questions and answers out there, not the datasets only._

## What does this all point to?

If we’re going to solve problems like the housing crisis or another pandemic, access to previous analyses needs to be made more available, not data only. I think government has a part to play here, and [improving data discoverability](https://cddo.blog.gov.uk/2023/04/12/how-we-are-improving-data-discoverability/) isn’t enough. 

People don’t look for datasets, they look for answers to questions. Could we design data services around that behaviour instead of building yet another catalogue?

---

[^1]: [BM25 The Next Generation of Lucene Relevance](https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/)
[^2]: [Individual workers lack good hard data skills, with their performance of only ‘basic IT skills’ closely matching employer demand](https://www.gov.uk/government/publications/quantifying-the-uk-data-skills-gap/quantifying-the-uk-data-skills-gap-full-report#individual-workers-lack-good-hard-data-skills-with-their-performance-of-only-basic-it-skills-closely-matching-employer-demand) in the Quantifying the UK Data Skills Gap report