---
layout: post
title: "Having a gander at Goose"
date: 2026-04-15T18:18:56+01:00
description: "Playing with an open source AI agent to build powerful, automated workflows without subscriptions or data leaks."
image: /assets/images/IMG_7227.jpg
image_title: "The sign out the front of Goose pub in Worthing, England"
image_artist: Steve Messer
image_source:
image_credit: Steve Messer
tags:
 - Artificial intelligence
---

Today I’ve been having a play with [Goose](https://goose-docs.ai){:target="_blank"},￼ a new AI agent that you can run on your local machine. No subscriptions, highly configurable and extensible, and open source. 

I’d been planning on getting around to setting up Claude Cowork, but I really want to stick to my [local and open first principle](https://boringmagi.cc/2024/12/08/our-positions-on-generative-ai/#local-and-open-first){:target="_blank"}, so Goose sounded like a great alternative.

A few weeks ago [I tried playing with OpenClaw]({% post_url 2026-02-17-the-cat-detective %}){:target="_blank"}, getting it to run a local model instead of burning through 120,000 tokens for every request, but it didn’t work. Goose feels similar but there’s more control over what it can do on your machine. 

## Setting it up

Setting up Goose and getting it connected to LM Studio was super easy, thanks to [native support for LM Studio](https://goose-docs.ai/docs/getting-started/providers/#local-llms){:target="_blank"}. This is made possible through OpenAI’s AI server API standard – another win for standards.

If you don’t use LM Studio, it’s no bother. Goose will check which model can run on your machine, download it and install it via [Ollama](https://ollama.com){:target="_blank"}.

Goose has a bunch of in-built [extensions](https://goose-docs.ai/docs/getting-started/using-extensions){:target="_blank"} that bring agent capabilities. Stuff like general development tools that are useful for software development, tools for webscraping, file caching, and automations, to-do lists and sub-agents. 

## Adding more tools and data

You can add your own extensions through the MCP server standard (thanks, Anthropic). I’ve started using Colin Devroe’s [Signboard](https://cdevroe.com/signboard/){:target="_blank"} to manage tasks and projects, as it’s built on the [‘file over app’ principle](https://stephango.com/file-over-app){:target="_blank"} meaning everything is stored as Markdown. It comes with its own MCP server, so I [followed the MCP_README](https://github.com/cdevroe/signboard/blob/main/MCP_README.md){:target="_blank"} to get it up and running with Goose. 

That was surprisingly easy too. Mostly click-ops, two lines updated on a config, and that was it. Goose could see my project boards, read my task list, move things around, add stuff. There’s the potential for automated task management emerging here. 

Next I hooked it up to my highlights and reading list through the [Readwise MCP](https://readwise.io/mcp){:target="_blank"}. One of the tasks on my board is to ‘read about rhizomatic learning’, and I’ve saved five posts about that. I asked Goose to look at them and tell me which to read first for a base understanding and which I should read next. Then I told it to plonk that ordered list in the card on my board, which it did. 

Straight away I started looking at what other MCP servers exist, for example, whether I can hook it up to my calendar or email. A new world of automation is opening up, but all of it’s happening on my local machine, securely, for free, using energy from my supplier (with a heavy mix of renewables).

Markdown and standard config files make all of this so easy to implement too. Configuring APIs to pass data around from different cloud services is such a faff, but I can do this all locally. In fact, if you pass README files and config examples to Goose, it’ll use whatever model is loaded to figure out how to implement the extension for you. It feels really accessible.

## So what?

In the early 2010s, SaaS products with extensible APIs were exciting. Then everyone removed or limited their APIs, everyone stuck their prices up, and you had to be picky about which things you subscribed to.

It’s the same with AI subscriptions now. I know some people have two or three, but it’s possible to have none if you run everything locally. 

And those [Claude outages and error rates happening almost daily](https://news.ycombinator.com/item?id=47779730){:target="_blank"}? A problem totally avoided if everything’s on your computer.

It’s kind of exciting. We’re in a place where it’s easy enough for relatively technical people to build their own [boring tiny tools](https://vaughntan.org/boringtinytools/){:target="_blank"}. For free. 

_Note: Last week I went to Goose in Worthing, an independent pub on the seafront. It gets the sun all day and is the perfect spot for a sunny pint – hence the OpenGraph image on this post!_