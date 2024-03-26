---
layout: post
title: "Universal interfaces and Semantic Agents"
date: 2024-01-22 17:38:52Z
description: "Thinking about voice-enabled assistants, learned services, and the immediate hurdles for these products to overcome."
image: /assets/images/img-489281716.png
image_title: "Rabbit R1 device "
image_artist: Unknown
image_source:
image_credit: Rabbit
tags:
 - Design
 - Product management
 - Artificial intelligence
---

After writing about the [universal interface]({% post_url 2023-11-14-universal-interface-no-thank-you %}) last November, I was surprised to see a real product take this idea further this year.

Everyone was [surprised by the rabbit R1 at TES 2024](https://www.tomsguide.com/features/rabbits-r1-ai-device-took-ces-2024-by-storm-what-is-it-and-why-might-you-want-one) and the device has sold out twice. It’s an AI-powered personal assistant that’ll do things for you, so that you don’t have to open up a website or app. Check out the [introduction video](https://www.youtube.com/watch?v=22wlLy7hKP4).

It works via a ‘Large Action Model’ which understands how websites and apps work and translates your requests (or stated intent) into actions that it performs on your behalf. For example, you can ask it to create a playlist of certain songs or Spotify or ask it to plan and book a holiday for you. (There aren’t that many use cases shared, nor a list of connected services, so I guess it’ll add more functionality as its users make requests.)

This is pretty close to [learned services](https://medium.com/writing-by-if/imagining-the-future-llms-generative-ai-and-future-experiences-4bb9080a19eb) that Projects by IF have been talking about, and AI as team-mates that Matt Webb has been looking at (link to that in my [previous post]({% post_url 2023-11-14-universal-interface-no-thank-you %})).

Although the video kind of pitches the device as a smartphone killer, it’s actually more of a smartphone companion. They’ve focused heavily on privacy, meaning you need to give rabbit verified and authenticated access to your chosen apps and services. You need another device to do this, so you can’t get rid of your smartphone or computer entirely.

The problems I mentioned previously still seem to exist, like how you’ll confirm you want to proceed with purchases or enable new permissions for other services or users. Do you have to toggle permission for each type of action and each service? Can you do that easily based on an action category, e.g. share on social media versus make a payment? When you open this thing on day one and start using it, do you blanket-enable all actions and refine them as you go? Or do you progressively toggle each action as you come to use it, leaving all new actions blocked until enabled?

You’re going to spend a lot of time enabling permissions for actions in the first few weeks, as you add new services and ask it to do new things. You’re going to have to keep that other device close to you.

And what about prompt engineering? One of the examples shared in the video was asking the rabbit R1 to plan and book a holiday for you. Presumably it’s just going to put together the most probabilistic plan, like top-ranked things on TripAdvisor, Time Out, etc. And you’d have to really engineer the prompt to tweak any plans, otherwise it could just create routes and plans between popular but far-away-from-each-other amenities and attractions.

If you’ve got to submit and tweak and submit and tweak the prompts over and over, surely you want to use text not voice?

I feel like this is built for rich, time-poor people rather than the wider world right now. It’s definitely a toy that needs the kinks ironing out. Like [Anil Dash said to me on Mastodon](https://me.dm/@anildash/111764436398105914):

> who is a person that’s an early adopter of gadgets, but is so disengaged with what they eat and where they travel, that they’ll just accept the default choices from a brand new platform that will certainly have bugs?

Maybe it’s useful for common, repeatable tasks you do often. But you can get some of that out of things like Shortcuts. Right now, I can’t see this thing going deep on all the different tasks you use a smartphone or computer for.

I think it’d be fun to think up scenarios where you might push this Large Action Model to its limits. for example, can I use it to 

- provision new machines in the cloud 
- write and categorise new tickets in JIRA (shudder) 
- renew my driving licence or apply for my passport 
- create and recite audio descriptions for illegally streamed sports games, or 
- split my shopping list and order items from whichever supermarket offers them cheapest that week?

And then I realised: this thing isn’t dissimilar to the [Semantic Agent that Tim Berners-Lee wrote about in 2001](https://www-sop.inria.fr/acacia/cours/essi2006/Scientific%20American_%20Feature%20Article_%20The%20Semantic%20Web_%20May%202001.pdf)! That was supposed to look like this:

> The entertainment system was belting out the Beatles’ “We Can Work It Out” when the phone rang. When Pete answered, his phone turned the sound down by sending a message to all the other local devices that had a volume control. His sister, Lucy, was on the line from the doctor’s office: “Mom needs to see a specialist and then has to have a series of physical therapy sessions. Biweekly or something. I’m going to have my agent set up the appointments.” Pete immediately agreed to share the chauffeuring. At the doctor’s office, Lucy instructed her Semantic Web agent through her handheld Web browser. The agent promptly retrieved the information about Mom’s prescribed treatment within a 20-mile radius of her home and with a rating of excellent or very good on trusted rating services. It then began trying to find a match between available appointment times (supplied by the agents of individual providers through their Web sites) and Pete’s and Lucy’s busy schedules.

All of that relies on good standards and ontologies, a [Semantic Web](https://twobithistory.org/2018/05/27/semantic-web.html), which make applications meaningful to machines and other applications, so that those things can interact.

But wait, didn’t we just live through 10 years of all the platforms making their applications less extensible? Reddit, Twitter and all sorts of services have made it harder for [third-party applications to interact with their platforms](https://www.digitaltrends.com/computing/reddit-api-changes-explained/).

Unless rabbit can convince these platforms to open up access again, or work directly with the rabbit team on making and supporting extensions, rabbit’s going to find it hard to give users the value they’re craving – more automation and less hassle. And with only 48,000 units sold currently, will the big platforms be incentivised to work with rabbit soon? Or will it simply not generate enough revenue for them, especially as so many actions happen off-platform where real people can’t see adverts?

It’ll be interesting to see how all this plays out, but right now the hurdle seems to be it’s not clear which services rabbit can use or whether other services are incentivised to integrate with rabbit. Which feels like a huge hurdle for rabbit to hop over.
