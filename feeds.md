---
title: Syndication Feeds
---
There are 3 syndication feed formats you can use to follow <i>Fillbert</i>. You can use a <b>feed reader</b> with one of these feeds to be notified when a new comic is published.
<div style="display:flex;justify-content:center;flex-wrap:wrap">
<div style="padding:11px">
<a href="{% include rel u='/feed.atom' %}" rel="alternate" type="application/atom+xml">
 Atom feed<br/>
 <img src="{% include rel u='/img/feed-atom.svg' %}" width="256" height="256" alt=""/>
</a>
</div>
<div style="padding:11px">
<a href="{% include rel u='/feed.json'%}" rel="alternate" type="application/feed+json">
 JSON feed<br/>
 <img src="{% include rel u='/img/feed-json.svg'%}" width="256" height="256" alt=""/>
</a>
</div>
<div style="padding:11px">
<a href="{% include rel u='/rss.xml'%}" rel="alternate" type="application/rss+xml">
 RSS feed<br/>
 <img src="{% include rel u='/img/feed-rss.svg'%}" width="256" height="256" alt=""/>
</a>
</div>
</div>
