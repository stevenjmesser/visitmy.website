---
layout: page
title: All posts
permalink: /all/
---

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
