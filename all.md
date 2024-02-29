---
layout: page
title: All posts
permalink: /all/
---

<p>You can use Cmd+F or Ctrl+F to find words and phrases in post descriptions and titles.</p>

<ul class="post-list">
  {% for post in site.posts %}
    <li>

      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      <p>{% if post.description %}{{ post.description | markdownify }}{% else %}{{ post.excerpt }}{% endif %}</p>
    </li>
  {% endfor %}
</ul>
