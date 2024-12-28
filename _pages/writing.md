---
layout: default
permalink: /writing/
redirect_from: /all/
---

<section class="posts">
<div id="tag-container">
{% assign all_tags = "" %}
{% for post in site.posts %}
  {% for tag in post.tags %}
    {% assign all_tags = all_tags | append: tag | append: "," %}
  {% endfor %}
{% endfor %}
{% assign tag_array = all_tags | split: "," | uniq %}
{% for tag in tag_array %}
  {% if tag != "" %}
    <span id="tag"><a href="/tag/{{ tag | slugify }}">{{ tag }}</a></span>
  {% endif %}
{% endfor %}
</div>
<h2>Writing</h2>
<ul>
{% for post in site.posts %}
<li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d-%m-%Y" }}</time></li>
{% endfor %}
</ul>
</section>

