---
layout: post
title: "How to setup Jekyll with Tailwind CSS"
date: 2021-12-18
description: "A fix to Marcin Doliwa’s tutorial on using Tailwind CSS with Jekyll."
image: /assets/images/
image_title: ""
image_artist: ""
image_source: 
image_credit: ""
tags:
 - General
---

For a while now I’ve had ‘build a Jekyll theme based on the GOV.UK Design System’ on my list of things to do, but I just haven’t got around to it. Instead I figured I’d try out Tailwind CSS, since it seems pretty easy to use.

I looked for a simple tutorial to get Tailwind CSS working with Jekyll and came across [this tutorial by Marcin Doliwa](https://mdoliwa.com/how-to-setup-jekyll-with-tailwind-css). Although it’s really simple to follow, I was having trouble getting Jekyll to run with PostCSS. 

Anyway, after a few hours I managed to fix it and get it running. Below is an adaptation of Marcin’s original tutorial that worked on macOS Monterey.

## Prerequisites

You’ll need to install:

- Xcode and command line tools using `xcode-select --install` in Terminal
- [Homebrew](https://brew.sh)
- [rbenv](https://github.com/rbenv/rbenv) and Ruby version 2.6.9
- [nvm](https://github.com/nvm-sh/nvm) and Node version 14
- [Jekyll](https://jekyllrb.com/docs/) using `gem install jekyll -v 4.1.1`

Now that’s done, you’re ready to get started.

## Steps

### 1. Start a blank Jekyll website

In Terminal, run `jekyll new mysite --blank` and change the working directory to the new folder by running `cd mysite`.

### 2. Install required packages

Run `npm install tailwindcss@2.0.2 postcss@8.2.2 autoprefixer@10.1.0 postcss-import@14.0.0`.

### 3. Set up PostCSS

Create a Gemfile in the `mysite` folder, add the `jekyll-postcss` gem to it and run `bundle install`.

```
# Gemfile

source "https://rubygems.org"

gem "jekyll", "~> 4.1.1"
gem 'jekyll-postcss', '0.4.0'
```

Make sure you see `Using jekyll-postcss 0.4.0` in the output, otherwise run `bundle install` again.

Add the `jekyll-postcss` plugin to your `_config.yml` file.

```
# _config.yml

url: "" # the base hostname & protocol for your site, e.g. http://example.com
baseurl: "" # the subpath of your site, e.g. /blog
title: "" # the name of your site, e.g. ACME Corp.

plugins:
  - jekyll-postcss
```

and create the `postcss.config.js` file.

```
// postcss.config.js

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

### 4. Set up the Tailwind CSS config file

Run `npx tailwindcss init` to create an empty Tailwind config file.

### 5. Import the Tailwind stylesheets in to your CSS file.

Edit the `assets/css/main.scss` file to make it look like this:

```
---
---

@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

### 6. Run Jekyll!

Now run `jekyll serve`. Open your browser, visit `localhost:4000` and your Jekyll site should be running Tailwind!