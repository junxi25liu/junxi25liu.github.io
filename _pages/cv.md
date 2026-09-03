---
layout: minimal
title: "CV"
permalink: /cv/
description: "Curriculum vitae of Junxi Liu."
---

## Education

<ul class="entries">
  <li>
    <span class="when">2023 – 2027</span>
    <span class="what"><b>University of Electronic Science and Technology of China</b><span class="sub">B.E. in Software Engineering · Chengdu, China</span></span>
  </li>
</ul>

## Research Experience

<ul class="entries">
  <li>
    <span class="when">Research</span>
    <span class="what"><b><a href="https://x-lance.github.io">X-LANCE Lab</a>, Shanghai Jiao Tong University</b><span class="sub">Research intern · advised by <a href="https://chenxie95.github.io">Prof. Xie Chen</a> · audio generation</span></span>
  </li>
</ul>

## Interests

<ul class="plain">
  <li>Text-to-audio generation</li>
  <li>Efficient generative models — flow matching, mean flows</li>
  <li>Audio editing and controllable generation</li>
  <li>Reinforcement learning and preference alignment for audio models</li>
  <li>Evaluation and benchmarking of audio generation systems</li>
</ul>

## Publications

{% assign sorted = site.publications | sort: "date" | reverse %}
<ol class="pubs">
  {% for post in sorted %}
  <li>
    <a class="t" href="{{ post.paperurl | default: post.url | relative_url }}">{{ post.title }}</a>
    {% if post.venue %}<span class="v">{{ post.venue }}</span>{% endif %}
  </li>
  {% endfor %}
</ol>

<!-- TODO: add Skills, Service and Awards once the details are settled. -->
