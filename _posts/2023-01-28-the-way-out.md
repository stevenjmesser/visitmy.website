---
layout: post
title: "The Way Out"
sub-title: "Weeknotes S14E03"
date: 2023-01-28 07:51:13
description: "Making decisions about browser support, considering the next steps in our accessibility strategy, and calculating costs for the year ahead."
image: /assets/images/IMG_9040.jpg
tags:
 - Weeknotes
---

Bit of a pancake week. Felt like I was stretched too thin across things to add any value, but wrapped up the week with positive chats and thoughts. Bit of a 180. Glad I’m [not the only one](https://weeknot.es/weeknotes-s02-e05-7289926120bd).

And as I started writing these, another 180: realised I hadn’t transferred 2FA codes over to my new phone before erasing the old one. My opening salvo at sunrise was ‘FFS’. But a quick restore from an iCloud backup meant I could recover the codes and move them to a new device. Phew.

What other miniature misfortunes may befall me? Who cares, it’s all good in the end.

So, what value did I squeeze out of the Stone of Potential this week?

- Finished the roadmap and Q4 objectives and presented those back to the senior management team
- Joined my first team retro
- Gave [One Login](https://www.sign-in.service.gov.uk) some pointers on contributing to the design system
- Made a start on updating the count of services using the design system
- Contributed to a workshop on what the future of Digital Service Platforms could look like
- Helped in an all-day workshop on figuring out [browser support for GOV.‌UK Frontend](https://github.com/alphagov/govuk-frontend/issues/2718)
- Continued researching the size of design system teams and maturity models
- Calculated our team’s costs for financial year 2023/24
- Contributed to a workshop on taking an organisational perspective over a service-level perspective
- Chatted to our community designer about Design System Day 2023
- Chatted to our user researcher and technical writer about auditing the content on our website
- Had coffee and chatted product & raves with [Oliver](https://oliverhannan.carrd.co)
- Chatted about the ‘why’ a lot with my ~~line~~ contract manager, [Martin](https://www.martinlugton.com)
- Took notes in the [design systems catchup](https://design-system.service.gov.uk/community/)
- Chatted to the Data Services team about making it easier for us to track performance objectives and economic benefits
- Talked through next steps on our [accessibility strategy](https://accessibility.blog.gov.uk/2023/01/06/a-new-accessibility-strategy-for-the-gov-uk-design-system/), including how we’ll help service teams create their own plans

## Browser support

Since Microsoft announced that Internet Explorer 11 will go out of support, the GOV.‌UK Frontend squad has been thinking about how we’ll [reduce support for IE 8, 9, 10 and 11](https://github.com/alphagov/govuk-frontend/discussions/2607). The use of those browsers has been declining for some time, but some journeys use those and other older browsers. For example, there’s a few transactions a year that take place on a Nintendo 3DS.

That’s a problem because we have to ship a bunch of code in order to make JavaScript run in those browsers: more code equals higher data costs, and can mean services run more slowly in the browser too. Supporting those older browsers prevents us from utilising newer features in APIs too.

What’s tricky is that pressing ahead and dropping support impacts users on older unsupported tech, which goes against our principle of ‘[This is for everyone](https://www.gov.uk/guidance/government-design-principles#this-is-for-everyone)’. But it also means shipping a bunch of code that can negatively impact a user. It’s a heck of a trade-off.

The team have been struggling to find a way forward, an answer, for a couple of months. It’s a knotty problem. And though I’m no expert on browser support and JavaScript, I am passionate about the Web…and it’s my job as product manager to help them out. My first observation was that they were approaching the conundrum like a waterfall project: figure it all out before committing to a solution. To encourage them to be more agile, we held a day-long workshop to talk through the problem, collect different ideas, and settle on next steps to make progress.

Ways forward were discussed in the morning, but conflicting opinions were halting progress. This is normal in technical teams staffed by experts, your job as PM is to unpack the different opinions and find a collective way forward. But I missed a portion of the meeting to take notes at the town hall, which meant I couldn’t follow the conversation as much. Things felt a little tense at lunch.

On the way back to the office, I laid down a plan: we’ll vote on which questions and unknowns were most important to talk about, and we’ll focus all conversation around deciding on actions we can take to learn more. There wasn’t a shared understanding on the team, one person knew more than the others from having their head in the problem for so long, and that needed meting out to the others. Doing some light discovery work helps teams share knowledge, hence the focus on next steps.

By the end of the day, the team had 3 concrete steps to take next. A success! We don’t have an answer yet, but we have progress. And progress is better than perfection.

When your team is great, you no longer need to worry about user stories and similar granular collaboration devices. Instead you think more about the conversations, the goals of the collaboration, and the environment it happens in. Less about the campfire, more about the camp.

## Accessibility strategy

Our accessibility lead showed me their assessment of the work we’d need to do in order to make the design system compliant with WCAG 2.2, part of our [accessibility strategy](https://accessibility.blog.gov.uk/2023/01/06/a-new-accessibility-strategy-for-the-gov-uk-design-system/). Thankfully it’s not as much work as we were expecting, but there’s still plenty to do.

We’ll need to do more research or technical investigations to decide what to do about a third of the impacted components, patterns and styles, but the rest shouldn’t need more than changes to guidance.

The benefit of us doing this work is that service teams using the design system won’t have to repeat it, but there is an opportunity to share our thinking. It’s an early idea currently but I’d like to build a tool to help service teams assess the impact of WCAG 2.2 on their service, which should help with planning accessibility audits and changes to their service. I’ll prototype something and share it around, see what people think.

## Design system team sizes and maturity

Similar to last week, my chat with a design system manager taught me that government gets great value for money from the GOV.‌UK Design System. Another team in the private sector is the same size, supporting a smaller number of teams – but they’re comparable in the number of end-user experiences they impact.

A highlight of the conversation was about selling value to senior leadership, which made me realise that we have opportunities for selling the value of the design system through case studies. We have a fantastic story from the pandemic, where we were able to design and build services lightning fast thanks to the design system, reliable platforms and cloud infrastructure. I’ll find out if it’s been written up already, but it’s worth sharing.

## Cypress Hill

I loved, loved, loved the hill session on Thursday morning. The cat woke me up at 5.30 a.m., which he’d been doing all week, the little shit, but I dragged myself out of bed to go run up a hill. It’s a weird part of any running training programme, you exhaust yourself but do see noticeable gains.

A nearby hill that other runners use is called Cypress Road, hence the heading. I ran up the hill as fast as I could for 90 seconds, with breaks in between to jog back down, and did that 4 times. After a 2-minute break, I did 45 seconds running hard uphill with another job break back down, which I did 6 times.

Knackering but with a huge sense of achievement to start your day. Felt so good.

## Cooking for others

We had friends over for early dinner on Sunday, to celebrate my partner’s birthday. I cooked a big spread: roasted tomatoes with yoghurt, cannellini bean & fennel mash, cavolo nero & sautéed onion with an anchovy dressing, roasted celeriac with mushrooms, a *salumi* board, and a big loaf of sourdough.

It’s the second time we’ve had people over in nearly a year of being here, and I really want to do more of that. Had tons of fun in the kitchen, cooking away and chatting. And there’s nothing like seeing all your mates tuck in and enjoy the food. Properly fills me full of happiness.

## Bookmarks

- [Emails show Hancock held talks to hand patient data and Covid test results to US tech firm](https://www.mirror.co.uk/news/politics/emails-show-hancock-held-talks-29015256), 5 mins
- [SlowMo app aims to helps people with psychosis](https://www.dezeen.com/2023/01/23/slowmo-app-psychosis-special-projects-nhs/), 4 mins
- [Experts criticise PCCs’ call to re-classify cannabis](https://www.bbc.com/news/uk-england-bristol-64348281), 2 mins
- [The petty bourgeoisie is Britain’s most influential class](https://www.opendemocracy.net/en/petty-bourgeoisie-dan-evans-mortgage-man-keir-starmer/), 3 mins
- [How to Stay Creative Forever](https://www.cjchilvers.com/blog/how-to-stay-creative-forever/), 3 mins
- [Cycles](https://www.ermlikeyeah.com/cycles/), 3 mins
- [“Building in public,” for system thinkers](https://blog.doubleloop.app/a-more-vulnerable-way-to-build/), 4 mins
- [Four Thousand Weeks](https://leebyron.com/4000/), 11 mins
- [Hard choices: How Europe’s fastest-growing start-ups become unicorns](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/hard-choices-how-europes-fastest-growing-start-ups-become-unicorns), 9 mins
- [Browser built-in search and ATAG A.3.5.1](https://hidde.blog/atag-a351-browser-built-in-search/), 3 mins
- [Recycling Digital](https://warrenellis.ltd/jot/recycling-digital/), 4 mins
- [AI-generated code helps me learn and makes experimenting faster](https://interconnected.org/home/2023/01/27/copilot), 3 mins
- [how to be interesting](https://russelldavies.typepad.com/planning/2006/11/how_to_be_inter.html), 5 mins
