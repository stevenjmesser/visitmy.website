---
layout: post
title: "The Staying of the Course"
sub-title: "Weeknotes S02E05"
date: 2018-11-10
description: "We’re reaching the mid-point of the quarter, so there’s a flurry of things going on. The team is chugging through work at a good pace, but there’s still so much to do if we’re to achieve the objective for our mission."
image: /assets/images/ACNMW_ACNMW_DA000662.jpg
image_title: "The Storm"
image_artist: "Joseph Mallord William Turner"
image_source: https://artuk.org/discover/artworks/the-storm-160391
image_credit: "Amgueddfa Cymru (National Museum Wales)"
tags:
  - Weeknotes
---
We’re reaching the mid-point of the quarter, so there’s a flurry of things going on. The team is chugging through work at a good pace, but there’s still so much to do if we’re to achieve the objective for our mission. Opening up conversation on how we’ll meet those goals has been good, but we’re subject to so many external factors it can sometimes be tough to stay the course. ([Sailing analogies](https://medium.com/@stevenjmesser/dealing-with-domineering-clients-67052f02f551) are quite good for framing team-work and missions, I find.)

## Five Things That Happened

*We did more things than this*

### One

Having migrated the first two applications over to a new hosting provider, we had a v-team retrospective with our friends in Reliability Engineering. It worked well, acting as a review of the steps we’d previously taken, giving us the chance to improve the run book for next time.

There was one gotcha to eliminate for next time: making sure that the release pipeline is clear and no one’s forgotten to release Puppet changes specifically. Our lead architect, Tim, reminded everyone that it was their responsibility to own a pull request (and associated changes) all the way through and to keep the deployment pipeline as clear as possible. [Continuous delivery](https://gds-way.cloudapps.digital/standards/continuous-delivery.html#use-continuous-delivery) relies on principles rather than process.

### Two

Had our first GOV.UK product manager fortnightly meet-up with the new Head of Product, Leanne. It was a bit full-on for her first session, but then again it was probably a perfect introduction for someone who’s going to own our high-level strategy for the forseeable future. We touched briefly on the product triage process – which has dominated most fortnightly meetings in recent months – and it was relatively trivial as opposed to the usual furore. That was good to see. Chatter about it had been dividing us as a community of late, but we were unified on it this week.

Rob used the [Lean Coffee](http://leancoffee.org) approach to decide what we’d talk about next. Everyone wanted to talk overwhelmingly about the roadmap and the next 12 months – which, unfortunately, we’re not able to [make public like in previous years](https://app.productplan.com/p/bUmH4fHC0hOivX-E2LYMu2hg9uEhkWp_). I’m not entirely certain on the reasons behind that but I don’t think it was an internal decision, because [using roadmaps as an open communication tool is a principle we hold dear](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap). I suspect it could be more to do with our roadmap being seen as a delivery plan rather than [a strategy to achieving a multipart vision](https://svpg.com/vision-vs-strategy/).

In my view, GOV.UK has pretty much (but not totally) achieved its [product–market fit](https://web.stanford.edu/class/ee204/ProductMarketFit.html) and should now be concerned with scaling. The issue we have is that new and existing departments on GOV.UK often bring solutionised features to us as problems, and many expect their requests to be built out. We have a good set of products and features to offer to government but I’m not sure where the sales process happens, and we need an amount of feedback from those interactions to influence our product iterations. In the meantime there’s plenty of work to be done on scaling the platform’s architecture and that’s something we can do with application- and machine-level data alone.

### Three

Though it meant I missed a team lunch for a new starter on Platform Health, we took one and half hours out of a busy day to map the problem space of publishing, and it was really beneficial. Myself, Humin, Sam and Mark, all product managers on publishing aspects of the platform, wrote up the high level problems we see with scaling GOV.UK and grouped those by theme. It’s intended to form a strategy for solving those problems, but in a time when reliability is perhaps more important than efficiency, I’m not sure how much of it we’ll be able to work on.

That aside, it was excellent to get together with PMs from across the programme and join up our thinking. I’ve been meaning to do that ever since joining Platform Health, bringing other product teams and their goals into our team’s thinking. Because, arguably, I am currently a [technical product manager](https://medium.com/productschool/what-is-technical-product-management-anyway-d36deb3216d0) whether I intended to become one or not. And technical product management has internal teams as its users.
> I’ve got a couple of product ideas bobbing around and have a hankering to scratch the ‘build a thing’ itch, so if you want to get involved in a side hustle, [hit me up](mailto:stevenjmesser@gmail.com).

### Four

Spent two hours coming up with options to upgrade and manage our Elasticsearch with Bevan. If I’m honest, I wasn’t really sure how to approach this, but I knew we needed a range of options plus their technical, financial and product-focussed impacts to present to the programme team for them to choose from. Sort of like a Choose Your Own Adventure business case.

![A matrix of options plotted against risks, benefits, technical complexity, delivery time and financial costs](https://cdn-images-1.medium.com/max/5772/1*49VaAAfIY-cEY5d6THUG8Q.png)*A matrix of options plotted against risks, benefits, technical complexity, delivery time and financial costs*

I freestyled a matrix of Post-it notes, detailing the different stages and options plotted against the risks, benefits, technical complexity, delivery time and financial costs of each. It actually worked quite well and we got all the brainstorming done inside of the meeting.

When a point was raised, there would usually be a counterpoint to consider for a different option, meaning we grew a body of thoughts quite quickly. Much better than scrolling up and down a document, scribbling in part-thoughts and half-formed sentences, which I’ve done previously.

### Five

Bevan covered how we code and quality assure products and features at GOV.UK. This was off the back of our retrospective, where Alan had asked to be introduced to our process and I was keen to hear about it too. We’d been told about it informally but found this proper session really useful. And it was good to understand the inner workings as compared to the development process at previous places I’ve worked. It’s pretty fast at GOV.UK and everything’s to such a high quality, I was just really intrigued to know more.

It hangs off a set of principles rather than defined processes. I’m paraphrasing here, but essentially our developers

* are responsible for their code and features throughout the development and release lifecycle,

* should test their code and its dependencies,

* have code peer-reviewed for quality,

* should QA their code in integration, either individually or with product managers, and

* use continuous delivery to release small, frequent changes.

There’s more in the [GDS Way](https://gds-way.cloudapps.digital) but bear in mind that this works for us and may not suit other teams.

## Reflections

### What I Learned

That all these facilitation techniques and Post-it noting practices are just methods for getting ideas out. Yes, I was skeptical at first and I know many people still are, but they work. If you’re struggling to have productive conversations at work and meetings go round in circles, try something different. There’s shitloads of blogs and other websites with loads of approaches you can try.

### What I Could Do Better

Ask people to give feedback to my line manager. A colleague came over and praised me for some work, saying they’d pass it on, but I’ve neglected to ask people to do that in the past. I’m going to make sure I know who line manages each person on our team, too, so I can furnish them with all the good work our people do.

## Bookmarks
- [**Governments fail to capitalise on swaths of open data**](https://www.ft.com/content/f8e9c2ea-b29b-11e8-87e0-d84e0d934341)
- [**Freedom on the Net 2018: The Rise of Digital Authoritarianism**](https://freedomhouse.org/report/freedom-net/freedom-net-2018/rise-digital-authoritarianism)
- [**Escape From the Feature Roadmap to Outcome-driven Development - Mind the Product**](https://www.mindtheproduct.com/2018/10/escape-from-the-feature-roadmap-to-outcome-driven-development/)
- [**How To Kill Your Tech Industry**](https://logicmag.io/05-how-to-kill-your-tech-industry/)
