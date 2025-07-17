---
layout: post
title: "Making notes, taking actions"
date: 2025-07-17T20:37:48+01:00
description: "Rolling my own automation for transcribing and summarising meetings. It’s surprisingly simple with some free tools."
image: /assets/images/IMG_5537.jpg
image_title: "A joke to-do list reading: read unread emails; compose a literary masterpiece; make each day 1% less shit. The final task is ticked off as completed."
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Artificial intelligence
---

Back in February I bought an M4 Mac mini so I could play with generative AI on my computer. It’s stuffed full of RAM, VRAM and CPU cores, meaning it’s a bit of a workhorse for £600. 

Playing with AI on my personal computer is one of my positions for using AI: [local and open first](https://boringmagi.cc/2024/12/08/our-positions-on-generative-ai/#local-and-open-first){:target="_blank"}. It saves me from billing and price hikes, makes the security and privacy considerations less of a ball-ache, and because my energy supplier provides renewable energy, it’s more sustainable too. 

Anyway, in this marginally better part of the AI sphere, I wanted to start automating some really _mundane_ shit. There have been moments in my life where I’ve been excellent at taking meeting notes, and there are times when I’ve been terrible. Right now I’m awful at doing it. So it’s definitely a tedium I wanna resolve.

Having used a few of the obvious products (transcription in Google Meet, transcription in Microsoft Teams, summarisation in Copilot) and reviewed their results (way too general, no knowledge of technical terms), I was clucking to customise the machine so I had more control over the outputs.

But they don’t let you.

So, like every other late-thirties, childless nerd with time to burn, I took on a new hobby. No, I did not buy a synthesiser or drum machine. I started rolling my own transcription and summarisation automation.

## The setup

It’s surprisingly simple. 

[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper){:target="_blank"} records audio from my meetings and whatever I say into the microphone. It transcribes those two recordings then smushes them together into one time-stamped transcript. This takes less than a minute.

From there, I’ve prepared a few prompts to summarise the various different meetings I have. Highlight decisions made, pull out things for me to add to my to-do list, remind me of anything to follow up on next time, and generally summarise the discussion. (I haven’t prepped anything for [workshops](https://www.nngroup.com/articles/workshops-vs-meetings/){:target="_blank"} yet but may do soon.)

When I use one of these prompts on a transcript, MacWhisper makes a call to an [LM Studio](https://lmstudio.ai){:target="_blank"} server running on my Mac, which passes the prompt and context on to a large language model. The LLM does its thing, beep-booping, tumbling parts of words and decimal-point numbers around in its magical cement-mixer of dreams, until a couple of minutes later out pops a summary. 

## What next?

Once my homemade Zoltar has dispensed with a summary of Very Recent Events, I read it, copy it into my notebook, make tweaks where needed, and add things to my to-do list. This is a part of the process I think is quite important: review, reflect, correct and commit.

Apart from the conversation I’ve just had, those are the important bits of thinking to do, which ensure the information sinks in and I act on it. The goal isn’t to outsource every thing I do to the machine, only a few parts. 

## Why bother?

It’s all about trade-offs. 

I really value being a part of conversations, being present for my colleagues in meetings, and not being distracted by typing into a text area. I also hate it when, after a meeting, I forget an important point or didn’t jot down a critical task. 

The automation solves that for me. I value that more than the act of typing meeting notes and stuff to do. It enables me to be a more active listener, a more considerate contributor, and it helps me when my fading memory has a wobble. 

Plus, it all happens on a machine I own, I operate, with parameters I’ve defined, that no one else looks at, and is stored on a computer I control access to. There’s a big upside to that. 

## But isn’t all AI immoral and unethical?

I dunno. That’s a bit like saying all hammers are immoral and unethical. Really it depends on how they’re produced and how they’re used. You can make a sustainable hammer by lashing a rock to a sturdy stick, but if you use it to club someone to death, that’s a no-no. 

Like a lot of things, there’s a spectrum. Finding and using Fairtrade large language models is probably a good next step, but I think other aspects of my setup and application are good and right. 