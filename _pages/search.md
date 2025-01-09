---
layout: page
title: Search
permalink: /search/
---

<p>Search through all posts. Alternatively, browse <a href="{{ "/topics" | relative_url }}">topics</a>, or <a href="{{ "/all" | relative_url }}">view all posts</a> if you like scrolling.</p>

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input">
<ol id="results-container"></ol>
</div>

<!-- Script pointing to search-script.js -->
<script src="../js/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script type="text/javascript">
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{title}">{title}</a> &middot; {tags}</li>',
  noResultsText: 'No results found.',
  limit: 100,
  fuzzy: false,
  exclude: ['Welcome']
})
</script>
