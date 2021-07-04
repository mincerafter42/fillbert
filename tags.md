---
title: Tag search
---
{% comment %}can't find a documented way to get the *names* of the tags from site.tags so here we are{% endcomment %}
{% assign tags = "" | split: "" %}
{% for post in site.posts %}
{% assign tags = tags | concat: post.tags %}
{% endfor %}
{% assign tags = tags | uniq | sort_natural %}

<nav>
Choose a tag to see the comics with that tag.<br>
<ul>
{% for tag in tags %}
<li><a href="#{{tag | xml_escape}}">{{tag}} ({{site.tags[tag].size}})</a></li>
{% endfor %}
</ul>
</nav>
{% for tag in tags %}
<div id="{{tag | xml_escape}}" class="shos">
<h2>Comics with the "{{tag}}" tag</h2>
{% assign posts = site.tags[tag] %}
{% include gregCalendar posts=posts %}
</div>
{% endfor %}
