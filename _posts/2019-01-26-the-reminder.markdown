---
layout: post
title: "The Reminder"
sub-title: "Weeknotes S03E02"
date: 2019-01-26
description: "A mammoth set of weeknotes, but ending with a note to enthuse everyone working in civic technology."
image: /assets/images/NMM_NMMG_BHC0837.jpg
image_title: "A Fishing Boat off a Rocky Coast in a Storm with a Wreck"
image_artist: "Jacob Adriaensz. Bellevois"
image_source: https://artuk.org/discover/artworks/a-fishing-boat-off-a-rocky-coast-in-a-storm-with-a-wreck-172595
image_credit: "National Maritime Museum"
tags:
 - Weeknotes
---

A mammoth set of weeknotes, but ending with a note to enthuse everyone working in civic technology. There was a lot of switching and changing this week, jumping from one team meeting to another, and then into programme-level meetings for our wider strategy. We also had our first check-in meetings so a ton happened this week. On Friday I left work feeling like I hadn't achieved everything I needed to, but on reflection it seems OK.

**FUN STUFF:** I've organised a [meetup for weeknoters in London](https://attending.io/events/weeknotes-meetup-ldn), please do come along!

## Five Things That Happened

*We did more things than this*

### One

Met up with Peter, Head of Performance & Data Analysis on GOV.UK, to chat about metadata, vocabularies, Directgov, the [Integrated Public Sector Vocabulary](https://help.esd.org.uk/support/solutions/articles/5000380060-where-can-i-find-the-latest-integrated-public-sector-vocabulary-ipsv-) and other things that my time at [Porism](https://porism.com) got me unexpectedly excited about. It came off the back of Kit and Robin's post about a [data revolution in government](https://dataingovernment.blog.gov.uk/2019/01/15/help-us-start-a-data-revolution-for-government/), which the seasoned amongst us would recognise as the latest in a long line of calls to action. That's not to say it's not still needed though, and I'm keen to think about ways we can show the value of this work, allowing senior stakeholders to put some moolah behind it.

It was nice to find an ally in Peter, one of many people I've been pleased to learn has an appreciation for data categorisation schemes.

### Two

Held a [lean canvas](https://blog.leanstack.com/why-lean-canvas-vs-business-model-canvas-af62c0f250f0) session with Paola, Content Product Lead on GOV.UK. I did my Jared Dunn bit and broke out the business tools. She's been thinking about structured data for content on GOV.UK for some time, so I wanted to get her ideas down in a way that would allow us to test the assumptions. We're pretty sure that adding structured data to content is a Good Thing, but we need to validate that it is a Good Thing. The lean canvas helps us break down the overall idea into specific tactical areas.

![Jared Dunn pulls a SWOT analysis board from behind a cabinet. From HBO's Silicon Valley.](https://media.giphy.com/media/C8CupnJmXXqSuxlPOX/giphy.gif)

For example, I asked her to start detailing the solution, what the thing was. She came up with four facets of the product: a tool to build and edit concept schemes and vocabularies, a tool to break up content and tag it, a contextual content API, and something else which I can't remember. [^1] Next I asked her to list the problems that would solve, and we jotted down a heap of ideas. We then worked through the rest of the canvas, finally settling on 'Revenue streams' which I changed to 'Value for government'.

We now have an understanding of what this thing might be, the problems it would solve, how it would solve those problems, the people who'd use it soonest and later, the cost to research and build this thing, etc. But everything we've listed is an assumption. The next step is to validate whether our assumptions are true or not. For example, we assumed that duplicating content was a problem this would solve. We need to dig into this problem area and collect evidence that a) it is a problem, b) it is a problem of unorganised and unfindable content, and b) it is a problem big enough to solve.

### Three

Spent a few hours with James, delivery manager on the Explore Personalisation work, drawing up an initial roadmap for the quarter. We broke down everything we needed to learn in order to write a report, what would likely go in to the report, and how we'd learn what we needed to know. This gave us the bones from which we could set some milestones, which really are essential for a nebulous piece of work like this. It was hugely valuable to get everything out of our heads and onto a sheet we could put in front of the team.

This paid off in the planning session later, as we were able to get the team aligned on the goals and add more detail to the backlog.

### Four

Met with people from the Food Standards Agency (FSA) to see their new service to register a food business (currently in private beta) and its overlap with GOV.UK Licensing's [food business registration](https://www.gov.uk/food-business-registration). It's a better user experience than the journey on GOV.UK, and it ties into local authority backend systems through an API (if needed) which is a huge improvement for councils. They were quick to place blame on us for broken journeys though, which made things more tense than they needed to be.

I wanted to understand how their service would improve on our shortcomings and they explained how the service worked. I identified that the switching cost for councils would be low, as the hand-off to councils was identical to GOV.UK Licensing – and improved if a council used the FSA service's API. As a result, I suggested we work together to explain this to councils and encourage more to move to the FSA's service. The details need to be worked out and journeys for all parties considered, but the main thing is that we make it better for users.

It also gave me an opportunity to pick their brains about open data, which they didn't know much about, but I'm hoping the excellent [Lucy Knight](https://twitter.com/Jargonautical) and [Sian Thomas](https://twitter.com/drsiant) will extol the virtues to them. Being able to see the number of new food business registrations by LSOA each month (or something) would be really useful, because one day I'd like to use that to start a food business.

### Five

Had fun hosting an Ask Me Anything with [John Cutler](https://twitter.com/johncutlefish) on Friday, and the other product managers at GDS seemed to enjoy it too. He spoke about tons of stuff. He really is a goldmine of product management skills, techniques and information, and he's great at providing analogies for what he's describing.

#### Highlights

_Thanks to Martin for writing these up._

- Be wary of just being reactive to things – this is the biggest mistake you can make as a PM.
- It's an anti-pattern to be myopic on things. You can't only focus on the detail of a problem area, you must also know its context and the landscape.
- Get the reality in the room when stakeholders make grand assumptions about solutions, ask them to break down how the outcome could be reached.
- People nod their head at certain terms but might not share the same understanding. For example, MVP is thrown around at GDS (and the rest of government) but how many people _actually_ understand what it means? Get definitions on a poster and out in the open to spark conversation. [^2]
- Helping is a power dynamic – be aware of that. In telling someone how to improve their ways of working, you're also telling them that what they do now sucks.
- Present thinking rather than gap thinking is probably better for organisational change. The latter is based on aiming for a massive far-off goal. The former is more about iterating within the present possibility space.
- If you're a new PM on an established product, create a learning backlog for yourself. Get a prioritised set of questions to help you learn about the product and its vision. Pull them into your team's backlog so they can answer stuff for you, it builds trust. Be clear on why you're asking the questions as well, to help people understand your strategic approach to discovery.
- Sell the opportunity rather than the intervention.
- Talk about uncertainty with certainty.
- Get [HiPPOs](https://www.forbes.com/sites/bernardmarr/2017/10/26/data-driven-decision-making-beware-of-the-hippo-effect/) to frame their idea as a [testable] bet that you’ll hold them accountable to. Then reflect back when you see the outcomes.
- Start together. Open up the door to the haunted house together. [^3]

One comment gave everyone in the room a good boost. He said, 'You're solving some of the hardest problems in the world, you know, you're not delivering a burrito by drone – that's just an optimisation problem! You guys are doing the coolest shit in the world.'

So it feels like we're sailing through a storm near jagged rocks, but we're still sailing. We're still doing good stuff. Remember that, people.

## Reflections

### What I Learned

The value of early-stage team roadmaps, even just for a quarter. Getting your initial thoughts out onto a board is really quite valuable, helping you set the structure of nebulous missions. They're an excellent artifact to talk over with users, but this was my first time having a proper stab at one with a team. Really thankful tht James persisted with this and got us started on one.

### What I Could Do Better

Dealing with challenging statements. It's hard not to seem defensive when you're explaining the reason for things being crap, but I'd like to learn how to be better at unpicking difficult people and getting them onside.

## Bookmarks

- [Signposting and evidence - Weeknotes S01E01](https://weeknot.es/signposting-and-evidence-weeknotes-s01e01-7e6a44920f67), 4 mins
- [How Retail Changes When Algorithms Curate Everything We Buy](https://hbr.org/2019/01/how-retail-changes-when-algorithms-curate-everything-we-buy), 6 mins
- [The ‘Amen break’ is the ultimate design pattern](https://medium.com/@davehouse_80809/the-amen-break-is-the-ultimate-design-pattern-53701e79e461), 4 mins
- [We could still prevent 1.5 ˚C of warming—but we almost certainly won’t](https://www.technologyreview.com/s/612753/we-could-still-prevent-15-c-of-warming-but-we-almost-certainly-wont/), 3 mins
- [“Toxic” behaviors that society has normalized, according to Reddit](https://qz.com/work/1522215/toxic-behaviors-that-society-has-normalized-according-to-reddit/), 3 mins
- [What Miley Cyrus’ birthday tweet to her hubby has to do with EU’s upcoming Copyright Reform](https://thenextweb.com/eu/2019/01/17/miley-cyrus-birthday-tweet-liam-hemsworh-eu-copyright-reform/), 7 mins
- [How Millennials Became The Burnout Generation](https://www.buzzfeednews.com/article/annehelenpetersen/millennials-burnout-generation-debt-work), 34 mins
- [Weeknotes s01e03 - That Feeling of Exposure](https://weeknot.es/weeknotes-s01e03-that-feeling-of-exposure-a73a4107e802), 5 mins
- [DCMS puts digital ID policy team on no-deal Brexit work](https://www.computerweekly.com/news/252456152/DCMS-puts-digital-ID-policy-team-on-no-deal-Brexit-work), 2 mins
- [Brexit-Related Lower House Prices Won’t Make Property Affordable](https://www.vice.com/en_uk/article/mbzqvn/brexit-house-prices-falling-millennials-property-buy), 5 mins
- [Your robot needs a passport](https://www.wired.co.uk/article/robot-passport), 3 mins
- [Clarity and shared direction](https://www.localwelcome.org/blog/2019/1/18/clarity-and-shared-direction), 3 mins

[^1]: Dagnabbit, I forgot to take a photo of the canvas. I'll do that and update this on Monday.
[^2]: Definitely going to do this.
[^3]: In horror movies, people being split up is the worst thing: they always die. People encountering scary stuff together is manageable.
