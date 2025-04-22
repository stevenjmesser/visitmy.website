---
layout: page
title: Colophon
permalink: /colophon/
---

Back when I worked in publishing, a colophon was the emblem of the publishing house. It could be used to describe how a publication was made, especially when the book was artfully bound. 

In blogger circles, people are using their colophon page to describe how the words and pages come into being. It’s like a little recipe for how the blog is made.

### Writing

My writing happens through a few methods.

1. Regular-ish journaling
2. Regular-ish reading and note-taking
3. Bursts of inspiration followed by automatic writing

Really I should have more of a process – I did a creative writing degree, forgodssake! – but, honestly, I’ve always enjoyed riding the waves of words as they spill forth inside my head. 

Rick Rubin says: ‘When we go inside, we are processing what’s going on outside. We’re no longer separate. We’re connected. We are one.’ You can find that oneness from flow or you can find it from ritual. Both work.

So, when I’m being more ritualistic, this means collecting a bunch of things to read from RSS feeds (via [NetNewsWire](https://netnewswire.com)) or [other people’s blogs]({{ "/blogroll" | relative_url }}) or links to things, saving them in [Reader](https://readwise.io/read), and then reading what I’ve collected. As I read, I highlight passages and make notes, which feed into [Readwise](https://readwise.io) (and a personal archive in [Obsidian](https://obsidian.md)). (I pipe these into weeknotes using the Readwise API too.) If I’m reading around a certain topic, I’ll usually start writing about it at the same time. But if I’m just reading for reading’s sake, the notes and highlights go into the big brain tombola. We’ll turn that later and see what comes out.

Journalling takes two forms: this year (2025) I started journaling in Obsidian each day, either in the morning or evening, which feed into [my weeknotes]({{ "/tag/weeknotes" | relative_url }}); and even if I haven’t journaled in Obsidian, I try and reflect on work and life once a week, to keep the cogs turning. 

When I’m overloaded or busy or just need to keep quiet, I might not journal or write weeknotes. Most years I have a little break.

In Obsidian, I use [Smart Connections](https://smartconnections.app) to make links between my writing, my notes and the passages I’ve highlighted elsewhere. This helps me make connections and develop more thoughts – or further develop a piece of writing. Sometimes I’ll just scan through Readwise, looking at the highlights from books or articles I’ve made, letting my brain make the connections.

My writing happens in [iA Writer](https://ia.net/writer), either [on my phone when inspiration strikes]({% post_url 2022-10-04-Notes-notes-notes %}) or on my computers. All the notes are in the cloud. iA Writer helps me focus on the sentences before me. Markdown has been a second language of mine for years, and I’m glad more and more tools are supporting it. 

What about editing? 

Well, it’s worth saying that university taught me I’m a better editor than I am a writer...but unhelpfully I suck at editing my own work. Hence the preference for automatic writing. 

Alas, when I read a piece I’ve written and realise it needs some editing, I’ll sleep on it: I’ll put it aside for a few days and come back to it later. This gives me the headspace to approach it anew, with my editing hat on. The rhythm and the patter of the passages matter most, then the structure. Where I need to focus more effort is vocabulary: I’m lazy, re-using words and phrases often.

Time for the big question now. _Why do I write?_ To work things out. To pass things on. To understand. To find delight in phrases. To participate in the human tradition. To become part of that composite Us that brings far richer meaning to the I. 

### Publishing

When I first created this site in 2018, I picked [Jekyll](https://jekyllrb.com) to build the site because it was preferred by GitHub Pages, which I used as free hosting. Although I’ve moved to another hosting provider since then, I haven’t really found a need to replace Jekyll. It does what I want it to do, it’s well documented, it runs fast enough, and I can add functionality using [gems](https://rubygems.org). 

For a long while I’ve had [Webmentions](https://aarongustafson.github.io/jekyll-webmention_io/) enabled, meaning I can pipe likes, replies and reposts from social media back into my posts. 

I used to use [jekyll-tfidf-related-posts](https://rubygems.org/gems/jekyll-tfidf-related-posts/versions/0.1.1) to calculate the similarity of related posts, but I’ve moved on to [jekyll_ai_related_posts](https://rubygems.org/gems/jekyll_ai_related_posts) which uses Open AI’s embeddings API. (I’d prefer to use a local embedding model but haven’t found a gem for that yet.)

### Design

This place has changed its look over time. I’m a crappy designer so just re-use other people’s templates, though I’m much better at customising those now. You can see what the website looked like [from 2018 to 2020](https://web.archive.org/web/20191215101544/https://visitmy.website/), [from 2020 to 2024](https://web.archive.org/web/20210404091117/https://visitmy.website/), and [the latest big change in December 2024](https://web.archive.org/web/20241227071521/http://visitmy.website/). I’ve been iterating on that ever since, learning CSS flex as I go.

### Sustainability

When I realised that [my website was killing the planet]({% post_url 2020-07-13-this-website-is-killing-the-planet %}) and pumping out nearly 7g of CO2 with every visit to the homepage, I decided to make a change. Instead of using images as decoration, JavaScript for fancy loading animations and GitHub Pages as a free host, I have

- reduced my use of images, and optimised any images with [ImageOptim](https://imageoptim.com/)
- removed the unnecessary JavaScript
- moved to a UK-based web-hosting company using renewable energy, [Krystal](https://krystal.io)

<img src="https://api.thegreenwebfoundation.org/greencheckimage/visitmy.website?nocache=true" alt="This website is hosted Green - checked by thegreenwebfoundation.org">

<div id="wcb" class="carbonbadge" style="text-align: left;"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>

There is [a grove of trees planted for this website](https://treesforlife.org.uk/groves/249395/) that will capture carbon from the atmosphere for years to come. Each year I’ll donate 1 to 2 trees based on how much carbon the website creates.

### Privacy

This website uses [Fathom](https://usefathom.com/ref/XKBW2Q) cookie-less analytics, a privacy-first product. It’s a great alternative to Google Analytics and I encourage everyone to use it. You can even use it for small projects or quick little prototypes because you don’t have to display cookie notices, simply gather the data you need and move on.

_No cookie notices, you say?_ That’s right! Because it doesn’t collect any personal or personally identifiable data, Fathom Analytics is [GDPR, CCPA and PECR (cookie law) compliant](https://usefathom.com/gdpr-ccpa-pecr-compliant). No pesky notices, no worries about accidentally polluting your analytics with personal information.

Please, stop using Google Analytics. Here’s a [$10 credit for Fathom](https://usefathom.com/ref/XKBW2Q) which also has a 7-day free trial. Give it a go.