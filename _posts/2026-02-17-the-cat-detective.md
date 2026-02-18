---
layout: post
title: "The Cat Detective"
sub-title: "Weeknotes S21E11"
date: 2026-02-17T21:51:43Z
description: "Entering the closing phases of my time on planning.data.gov.uk. KPIs, handbooks, plus playing with OpenClaw and coding agents."
image: /assets/images/IMG_6942.jpg
image_title: "A tabby cat sits on a patterned rug amidst scattered papers and sticky notes. Documents, flyers, and photos are spread across the floor."
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Weeknotes
---

Last week was quiet compared to the last few months. Moving from being hands-on with a product team (with a spicy deadline) back to a zoomed-out, leadership role is obviously quite the change. I also needed to rely on some other people for information rather than being the information-radiator, which changes the pace of the day-to-day.

## Key performance indicators

The main thing I’m looking at is our key performance indicators and a performance dashboard. I drafted some KPIs yonks ago and we’ve got some up and running, but others proved trickier to implement. There’s some good work happening on it now and some people who can work on it, so it should be easy to get these embedded.

We did set up a [performance dashboard](https://www.planning.data.gov.uk/about/performance){:target="_blank"} a while ago but, for various reasons, it hasn’t been updated in a while. We should do that soon.

## NISTA review

Another job last week was preparing information for a [NISTA strategic assessment](https://www.gov.uk/government/publications/ogc-gateway-review-0-strategic-assessment-guidance-and-templates){:target="_blank"} of the programme, its interventions and whether it all makes sense. Helpfully we’ve got some decent data to show that things are moving in the right direction, and over the last couple of years I’ve honed the strategic narrative to be short and understandable. 

Personally I feel like there should be a mid-stage review happening but I guess when the IPA turned into NISTA, something changed? Who knows. The way government evaluates and inspects its own ability to deliver the things it said it would do is labyrinthine and confusing to many people involved. 

Anyway, it was nice to hear that there’s a [new version of the Green Book](https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents){:target="_blank"}.

## Service handbook

Main thing I’ve got to do before heading off is to update the [service handbook](https://handbook.planning.data.gov.uk){:target="_blank"} I started. There’s a bunch of gaps which need filling and I could do with iterating the ‘What we do’ page so that it’s clearer.

I’m also running a workshop with the product managers next week to define the value stream and everyone’s roles and responsibilities. That’ll be very handy to have written down, especially when onboarding new team members.

I wrote up a bunch of tasks on our [open project board](https://github.com/orgs/digital-land/projects/11/views/10?pane=issue&itemId=157737206&issue=digital-land%7Cservice-handbook%7C43){:target="_blank"} so that all of you can hold me to account.

## OpenClaw and coding agents

Also spent a fair bit of free time dicking about with [OpenClaw](https://openclaw.ai){:target="_blank"}, getting it to run local models. 

At first I set up a burner Mac (with thanks to Tom for that phrase!) with OpenClaw to use Claude, but after seeing that the agent(s) used 120,000 tokens for each message, costing about $0.30, I figured I’d try something less expensive.

My main Mac is an M4 and runs local models rather well for my needs, so I got the burner Mac to make requests to that over my local network. For some reason it never quite worked. I could send simple API requests from the burner to the main machine, but the agent would get connection errors some times. 

So I switched to trying OpenClaw on my main machine, cutting out  the local network as a potential bottleneck, and the model would always fall over and fail. I’m guessing an M4 with 16GB RAM decent specs ain’t enough – although I wasn’t using MLX models which are more efficient on Apple silicon.

Also tried [Opencode](https://opencode.ai){:target="_blank"} to use local models for coding agents, and that’s performing better. The agent thinks through a task and does things, though it does run a bit slowly. Again, I’m using a GGUF model and MLX might run faster. The models trained for coding tasks work a lot better than generic models – rnj-1 was better than Gemma 3. (Mistral 3 is doing a bit better than rnj-1.)

Anyway, the amount of juice these agents are using is not small, it’s actually kind of scary. To think that people are just throwing prompts into agentic LLMs – which all the major players now offer – boggles my mind when you think about how much compute and energy is required to power all that. Yes, [the price of initiative has collapsed](https://medium.com/@marthalanefox/the-price-of-initiative-just-collapsed-adf7453ca268){:target="_blank"} but is anyone counting the carbon cost?

## How do you know that a leadership function is performing well?

As the roles I take on start to look more like leadership than individual contribution, I’ve been thinking about accountability. What does good leadership look like from a team’s perspective?

We measure team velocity, code quality and delivery metrics, but rarely measure the environment that enables those things. So what if we changed that?

I wrote this piece on [leadership health metrics]({% post_url 2026-02-11-leadership-health-metrics %}){:target="_blank"} which noodles on how you might start working these things out. It got a good response on LinkedIn, surprisingly. 

## Bookmarks

- **[Monthnote: January 2026](https://jiggott.medium.com/monthnote-january-2026-715910537fa9){:target="_blank"}, 4 mins.** Nice notes, as ever, from James, sharing what’s going on in NHS Land.
- **[Learnings from LocalGov Drupal](https://willcallaghan.com/learnings-from-localgov-drupal/){:target="_blank"}, 8 mins.** Fab post by Will on the principles he’s learned about making movements work in devolved/federated environments. LocalGov Drupal is a successful collaboration of councils creating software they can afford and trust for the long term. Good lessons in here.
- **[Selling AI to the left](https://www.economist.com/britain/2026/02/05/selling-ai-to-the-left){:target="_blank"}, 2 mins.** The author implies that Extract was invented by the government to convince lefties that AI is a good idea. But it wasn’t. Me and PSD came up with the idea and Gavin at i.‌AI helped bring it to life. 
- **[When the Agents Found God](https://www.lwilko.com/blog/when-the-agents-found-god){:target="_blank"}, 10 mins.** Liam ponders what it means when we [draw faces on paper plates](https://bsky.app/profile/kaye.zone/post/3meknuhjmhc26). (He said it was a shitpost.)
