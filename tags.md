---
title: Tag search
Fabian: <span lang=de>Fabian</span>
---
{% comment %}can't find a documented way to get the *names* of the tags from site.tags so here we are{% endcomment %}
{% assign tags = "" | split: "" %}
{% for post in site.posts %}
{% assign tags = tags | concat: post.tags %}
{% endfor %}
{% assign tags = tags | uniq | sort %}

<nav>
Choose a tag to see the comics with that tag.<br>
<ul>
{% for tag in tags %}
<li><a href="#{{tag | xml_escape}}">{{page[tag]|default:tag}} ({{site.tags[tag].size}})</a></li>
{% endfor %}
</ul>
</nav>
{% for tag in tags %}
<div id="{{tag | xml_escape}}" class="shos">
<h2>Comics with the "{{page[tag]|default:tag}}" tag</h2>
{% assign posts = site.tags[tag] %}
{% include gregCalendar posts=posts %}
</div>
{% endfor %}
