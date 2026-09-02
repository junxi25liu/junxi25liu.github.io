---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.E. in Software Engineering, University of Electronic Science and Technology of China, 2027 (expected)

Research Experience
======
* Research Intern, X-LANCE Lab, Shanghai Jiao Tong University
  * Advisor: Prof. Xie Chen
  * Research on audio generation

Research Interests
======
* Text-to-audio generation
* Efficient generative models (flow matching, mean flows)
* Audio editing and controllable generation
* Reinforcement learning and preference alignment for audio models
* Evaluation and benchmarking of audio generation systems

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<!-- TODO: add Skills, Service, and Awards sections once the details are settled. -->
