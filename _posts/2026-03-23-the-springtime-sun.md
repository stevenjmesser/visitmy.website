---
layout: post
title: "The Springtime Sun"
sub-title: "Weeknotes S21E15"
date: 2026-03-23T16:35:18Z
description: "A session on working in the open, two case studies, redesigning governance and reporting, and describing to people what the work is. Also did some AI prototyping."
image: /assets/images/IMG_7122.jpg
image_title: "Buildings in the sun"
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Weeknotes
---

IMG_7122.jpg

Last week was my penultimate week on planning.data.gov.uk, meaning there were a bunch of loose ends tied up. But there were a couple of really valuable moments too, and one that was especially heartwarming. 

Also had a lovely chat with PSD over tea beside the Thames on Wednesday evening, the warm sun reflecting off the water. Need to get a regular catch-up in the diary, I’m going to miss being able to hang out with the man so often!

## Planning data

### Working in the open

A couple of weeks back I suggested doing a talk on working in the open, as we wanted more local planning authorities in Open Digital Planning to follow the lead set by [Adur & Worthing in writing public notes](https://medium.com/awc-digital-design) about what they’re doing. Multiple authorities have been the focus of [case studies](https://opendigitalplanning.org/resources/case-studies) for Open Digital Planning, and LPAs have been involved in [show & tells](https://opendigitalplanning.org/insights/show-and-tells) too.

The session was designed to demystify working in the open, show the benefits, and encourage people to give it a go. We had about 20 people sign up and attend the session, so not huge numbers, but we’ve recorded it for others – and people plan on running the session again in future.

In the chat, a few people said how presentations and show & tells could be anxiety-inducing, which is fair enough. We’re all different, and it can be a nerve-wracking time for some people. But a couple of attendees who suffer with anxiety around presentations came forward to offer their thoughts and their help. It was a lovely thing to see! 

If you’re interested, [check out the video](https://visitmy.website/about/#:~:text=What%20is%20working%20in%20the%20open) to see what we covered. It’s the second time I’ve run a working in the open session with a person from a comms team and it’s always been so helpful. Extra lovely to have a community manager there this time!

### Case studies

I also spent a couple of evenings writing up two case studies about my time working on the platform. 

One was a general [overview of my time as Strategic Product Lead](https://boringmagi.cc/case-studies/establishing-foundations-and-scaling-planning-data-gov-uk/), implementing ways of working, processes and a mindset so that the teams can execute on the service owner’s vision. There’s loads I did that I didn’t write about, but the meat of the operation was written about in the case study.

The second case study covered the work I did [leading AI product innovation on Extract](https://boringmagi.cc/case-studies/leading-ai-product-innovation-on-planning-data-gov-uk/), which is a typical example of the ethos behind Boring Magic. Like, yes, I’ll admit there’s some innovation in there, but it’s on a relatively unsexy problem. 

[Jeni wrote some nice words about the Extract case study](https://bsky.app/profile/jenitennison.com/post/3mhikjz5jyk2j):

> I love this! Public sector AI innovation to address a clear problem, prioritising learning, listening to users and respecting professional standards. Great to see this written up so clearly too.

### Operating model

The work I did on the [operating model](https://handbook.planning.data.gov.uk/how-we-work/operating-model/) was approved and made its way into the team handbook. It’s a first version covering all teams working on the platform – previously only one team could describe its ‘process’ – so it’s something the teams will be able to own and iterate going forward.

This isn’t the first time I’ve done this sort of work, and it comes from a firmly held belief: that everyone should be able to come to work and understand where and when their skills are useful. If you can’t describe that as a leader or manager, everyone will be making it up as they go along, and you’ll spend more time getting it completely wrong than getting it right – or exceeding expectations.

That’s the thing about high-performing teams, everyone needs to know the baseline in order to perform better than it. 

### Governance and reporting

Last summer me and a delivery manager had a meeting with the programme management team about the high levels of duplicative reporting and status updates across meetings. Something wasn’t right. Product and delivery managers would spend around a day per week reporting on progress, sharing updates in meetings, filling in spreadsheets and Power BI dashboards, and writing weeknotes to let everyone else know what was going on. All of this talk about the now prevented there being time for conversations about future blockers or issues to resolve. It also takes time away from steering the team and its work to be more effective.

Though we left the meeting having heard that something would change, for one reason or another we still have the same cadence of meetings and reports. And the feeling of duplication was starting to grate even more. The situation had been going on for almost 12 months, so we felt it was time to have another conversation.

It was really productive as the programme management team got to lay out what they need, and the product teams got to lay out their frustrations and what they need. We were also able to have conversations about expectations, and the programme team set a goal in front of the product managers for having a better version of governance and reporting ready for comment in mid to late April.

## Sport England

The week started with a show & tell, sharing a prototype I pulled together to help teams speed up the process of making grant decisions. Though it wasn’t a slam dunk, there were lots of elements they did find useful, and that helped paint a picture of what was possible if the organisation made better use of data.

I gave lots of caveats before sharing the prototype, talking about the fact it’d probably be more wrong than right, but some aspects of it may be useful routes forward. 

For the rest of the week, we attempted to help one of the other teams analyse a bunch of information they’ve collected from partner organisations, so that they can be more strategic in how they work with partners in future. (Side note: I’m constantly impressed by the people working on the frontlines at Sport England. They’re smart, care about the work they’re doing, and really understand outcomes. I reckon central government teams could learn a lot from social impact organisations.)

Essentially, the task was to understand what they were trying to achieve feeding a detailed prompt and spreadsheet to Copilot, then decompose the problem and make the solution more robust using software engineering techniques. 

For example, they had one prompt that would output the exact report they needed with an executive summary at the top. But that summary needs to be based on the analyses of individual partners, which didn’t happen until the end of the prompt. So the summary and individual analyses didn’t align. 

We broke it down into several separate prompts that we could orchestrate through a workflow or set of agents, and also changed how analysis of each partner was done to produce more reliable outputs with less variance. The inherent non-determinism of AI-powered analysis gives me goosebumps, I worry about how trustworthy the outputs are. 

We hit some blockers with access to Copilot, meaning we can’t orchestrate the workflow. Also, Copilot Studio is chucking out 404 errors, not explaining those with error messages or anything. You can tell that they’re using AI to design and release products that aren’t ready. I guess the only way to keep your moat is to convince all your enterprise customers that you’ll deliver the future to them, but soon enough everyone’s going to learn that Microsoft is lying. 

## Side project

Had a great chat with [Harrison](https://harrisonpim.com) about the side project, and he gave me so many useful pointers. I need to carve out some time to take this forward.

## Running

I came down with a nasty cold the weekend before last, which meant I spent all week not running. Also I went out on Saturday night, waking up horribly hungover on Sunday. 

But I figured that committing to a long run would work the toxins out my system _and_ get me back on track for marathon training. Thankfully I was right! I only cranked out 27km of the 29km I needed to run, but it felt good to get out instead of wasting away on the sofa. 

Please do [donate to my JustGiving](https://www.justgiving.com/page/steve-2026) for the Manchester Marathon and London 10K!

## Bookmarks

- **[Strategy shaping and mapping](https://irinapencheva.com/2026/03/17/strategy-shaping-and-mapping/){:target="_blank"}, 5 mins.** Loved this from Irina. Proper leadership. They all worked together to map how their daily tasks connect to the bigger Personalised Prevention Services strategy. So important being able to see how your work contributes to the bigger picture!
- **[I built an AI service mapping tool](https://sarah-drummond.com/2026/03/i-built-an-ai-service-mapping-tool/){:target="_blank"}, 5 mins.** Great notes from Sarah on building an AI-assisted tool to help people start mapping service user journeys. She believes mapping is a thinking process (yup!), not just an output, and the tool supports collaboration without replacing critical thinking. 
- **[Co-design – deciding together](https://www.mind.org.uk/workplace/influence-and-participation-toolkit/how/methods/co-design/){:target="_blank"}, 2 mins.** Found this a really helpful explainer in trying to pull together a workshop. Co-design means users and producers work together equally to create a product or service. Everyone with experience helps research, design, and agree on the final product. It takes time, support, and shared decision-making to make co-design work well.
- [What is Participatory Design?](https://ixdf.org/literature/topics/participatory-design){:target="_blank"}, 6 mins
- [What is Co-design? A Primer on Participatory Design](https://www.mural.co/blog/co-design-method){:target="_blank"}, 12 mins
- [Guide to co-design](https://communities.sunlightfoundation.com/action/codesign/){:target="_blank"}, 6 mins
- [Co-production – deciding together](https://www.mind.org.uk/workplace/influence-and-participation-toolkit/how/methods/co-production/){:target="_blank"}, 2 mins
- [Witness Caught Using Smartglasses in Court Blames it all on ChatGPT](https://www.404media.co/witness-caught-using-smartglasses-in-court-blames-it-all-on-chatgpt/){:target="_blank"}, 3 mins