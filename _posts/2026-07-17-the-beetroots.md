---
layout: post
title: "The Beetroots"
sub-title: "Weeknotes S22E08"
date: 2026-07-17T18:52:32+01:00
description: "Thoughts on hypotheses, assumptions, experiments and roadmaps in alpha."
image: /assets/images/IMG_7629.jpg
image_title: "People stood around discussing ideas in front of Post-it notes."
image_artist: 
image_source:
image_credit: 
tags:
 - Weeknotes
---

Haven’t written a weeknote in almost a month, but a lot has been going on. A quick summary on what we’ve been up to follows.

- Restructured and finished the discovery deck, broadening the data fragmentation finding and surfacing teams’ struggles with the NHS App (and other technologies) as a finding in its own right.
- Completed further rounds of improvements to the discovery report and supporting deck.
- Published the discovery outputs – long-form report, [design history](https://design-history.prevention-services.nhs.uk/managing-my-health/2026/07/helping-users-do-more-with-results/){:target="_blank"}, and show-and-tell deck – with the playback reinforcing that prevention results are fragmented, duplicated, and often lack the context people need.
- Ran two in-person alpha kick-off days in London, fleshing out DPSP team map and user problems, sketching solutions, and working through lab-to-GPIT-to-NHS App data flows.
- Refined the alpha assumptions into a clearer cycle of hypotheses, assumptions and experiments so the highest risks come first.
- Held the first team retrospective to reflect on the first two weeks of alpha planning and improve how we collaborate.
- Confirmed the first alpha partnerships with two teams, based on [Ralph’s relationshipping](https://ralphhawkins.co.uk/posts/weeknotes/2026-07-11-dance-yrself-clean/?from=home){:target="_blank"}.
- Shared an early [prototype from Frankie](https://frankieroberto.github.io/nhsnotes/posts/week-100-mixed-messages/){:target="_blank"} with one partner team, gathering positive feedback plus refinements around trauma-informed notifications.
- Held the first clinical governance session and set up a regular clinical review.
- Explored the tech and data landscape with NHS England colleagues, mapping the PSA data flow end to end.
- Continued building relationships across GPIT, the NHS App team, and prevention services.

To be honest, I’ve had a crisis of confidence over the last few weeks, with more downs than ups. I haven’t always been sure I’ve been doing the right things, or in the right way, despite having done similar work in the past. But every day is a school day, I’ve been blessed with support from my team-mates, and I think I’m on the right track now.

There has been more flow this week, which has been good.

## Hypotheses, assumptions and experiments

The alpha phase is all about testing out multiple options to solve risky problems. Not every problem, just the biggest. So we’re focusing the alpha on those hypotheses...but they haven’t emerged instantly or cleanly. It’s taking a bit of work (which is fine).

At the alpha kick-off we mapped a wall of risky assumptions. It was a good conversation...and a bad plan. The assumptions were broad, a lot of them weren’t really testable, and plenty were third-order problems we don’t need to touch yet.

So we spent the next fortnight sharpening them. Two rounds of review – reframing the loose ones, sorting them onto a prioritisation grid, tagging each with a dimension (feasibility, usability and value, viability, and ethics), archiving the duplicates. It felt better. Tidier, at least.

Then we sat down to actually plan with them, and realised they still weren’t right.

The problem wasn’t the wording. It was the shape. We had risky assumptions as the top-level thing and were trying to build hypotheses out of them – which meant we were anchored on risk rather than on the outcome we’re chasing or the problem we’re solving. That’s a trap [Jamie](https://www.jamiearnold.com){:target="_blank"} keeps flagging: when the currency is risk, you end up running a project to mitigate it instead of to explore what's possible.

So we flipped the model.

### The model

Borrowing Jeff Gothelf’s definitions, the hypothesis becomes the parent and the assumptions sit underneath it. 

A hypothesis is a testable belief that, if true, moves an objective: ‘we believe this thing will achieve these outcomes for these users, and we’ll know it’s working when these signals show up’. We keep it at the service level and measure movement above a baseline (usually zero), not a hard target – the patch of sand we’re aiming for, not yet a line in it.

Under each hypothesis sit the riskiest assumptions – ‘we assume X’ — the beliefs it would die without. Those get tested by experiments, scoped by appetite: a couple of days, a week, two weeks. 

We run it, then analyse what we actually saw and call it validated, invalidated, or inconclusive. That call decides what happens next, and ‘next’ doesn’t have to mean shipping – it might mean reframing the hypothesis, or writing up what didn’t work and why. 

The evidence loops back. It refines the assumption, confirms or reshapes the hypothesis, and tightens the user need.

The part we care about is that problem statements and user needs are equal partners, not bolt-ons. They hang off the model right next to the hypotheses. That keeps us honest in two directions: the hypotheses pull us into the solution space and the language of ‘what change do we want to create’, while the problems keep us anchored to why any of it matters. And if our experiments kill a hypothesis, the problem is still sat there in view – so we ask whether we need a different solution, rather than quietly moving on.

Same words we were already using. Used more precisely, and the right way round.

Maybe I’m just missing working with psd but [diagramming the model](https://gist.github.com/stevenjmesser/bc27fd72c1f277f2a28bc48929e9e565){:target="_blank"} helped me communicate what was in my head. (This is the third version, informed from conversations with Jamie and James throughout the week.)

One thing we got wrong that’s worth naming: the first fortnight’s ‘experiments’ were mostly setup tasks. We should have run a sprint zero. Next time I will.

I think we’ll write it up with some workshop instructions so we can do it better next time.

## Roadmaps in alpha

I’ve been thinking about roadmaps in alpha too. Roadmaps are easier to do when you’re in delivery, when it’s all about velocity of shipping. It’s tricker in [discovery and alpha]({% post_url 2022-04-09-alpha-is-discovery %}), when it’s all about velocity of learning. There isn’t a straight path.

My argument: a left-to-right Gantt is a bit of a lie when you’re in the alpha phase. It manufactures a certainty we don’t have. 

We’re still creating the evidence, so the honest shape is a cone – we know where we are today, and the future fans out from there. Better still is a strategic roadmap that says what’s happening roughly when, but marks the decision points where we might branch off to different futures. And the hypotheses can be those decision points: validated enough to carry on to private beta, or invalidated enough that we stop and the next step is decided then.

NHS assurance runs on GDS’s alpha / private beta / public beta / live, but they want more certainty, earlier, than this kind of work can honestly give. Agile words, waterfall reality. 

So my idea is a Now, Next, Later with the if-then branching logic made explicit – what we do if a bet pays off, what we drop if it doesn’t. Honest about the uncertainty rather than pretending it away.

Underneath all of it, we’re evidence-driven, not deadline-driven. (Though we do have [a deadline to keep up the pace]({% post_url 2024-08-22-deadlines-in-product-delivery %}).) We’ll keep the dependent milestones in view, but I’m trying not to tie ourselves to a critical path we can’t yet see the shape of.

## Other things

- I wrote about [making experimentation an explicit skill]({% post_url 2026-07-08-is-testing-and-learning-a-methodology-or-a-core-skill %}) in skills frameworks.
- The food at Bocca di Lupo is delicious. _Trippa alla Romana_ in London, what a joy!
- Getting close to finishing my first track on the sampler. Jungle fun.
- Finally worked out how to use the bread machine without using a bread mix. Turns out you just add the yeast at the bottom!
- Raised [£1,020 for Crisis](https://www.justgiving.com/page/steve-2026){:target="_blank"}, thanks for all the donations.
- [_The Death of King Arthur_](https://www.penguin.co.uk/books/35628/the-death-of-king-arthur-by-ackroyd-peter/9780140455656){:target="_blank"} is bonkers, and [_Emergent Strategy_](https://adriennemareebrown.net/book/emergent-strategy/){:target="_blank"} wasn’t what I was expecting but they’re both decent books. John Muir’s descriptions of Yosemite in [his book](https://www.gutenberg.org/ebooks/7091){:target="_blank"} are filling my evenings now. Renting ebooks from a library is saving me money.
- [_Effi o Blaenau_](https://www.imdb.com/title/tt40001182/){:target="_blank"} is excellent, [_Disclosure Day_](https://www.imdb.com/title/tt15047880/){:target="_blank"} is...OK. Seeing [_The Odyssey_](https://www.imdb.com/title/tt33764258/){:target="_blank"} next week.