---
layout: post
title: "I love GitHub Codespaces"
date: 2023-08-16 08:29:57+01:00
tags:
 - Notes
---

Restructured the git repository for my website this morning.

Previously I had it tracking changes to HTML files only, for a reason I can’t remember. I didn’t publish the source code to my site on GitHub – no idea why.

All that code is on my personal machine, which means I can’t add to or update my website unless I’m sat at home. And occasionally I want to make changes from elsewhere, when I’m on a train, for example. So I’ve moved that code onto GitHub.

This means I can use GitHub’s Codespaces to update my website. I’ve been using Codespaces at work to update the GOV.‌UK Design System website and our team playbook, and I bloody love it. My work machine is locked down[^1], I can’t install any packages and have no `sudo` access to the terminal, which restricts what I can work on. Codespaces liberates me, allowing me to work on repos and not worry (too much) about the packages I’m installing. You simply spin up a machine, install the dependencies, work on a project, commit, push, tear down. Simples.

[^1]: Using a locked-down machine is standard practice for product managers at GDS. Not many of the PMs write code, true generalists, but I’m one of the annoying PMs who likes to think they can dabble.
