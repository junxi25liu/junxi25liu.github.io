---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an undergraduate student at the [University of Electronic Science and Technology of China (UESTC)](https://en.uestc.edu.cn/), majoring in Software Engineering. I have been a research intern at [X-LANCE Lab](https://x-lance.github.io), [Shanghai Jiao Tong University](http://en.sjtu.edu.cn), advised by [Prof. Xie Chen](https://chenxie95.github.io).

My research focuses on audio generation. I am interested in making generative audio models faster, more controllable, and better aligned with what people actually intend to hear.

<div class="waveform" aria-hidden="true"></div>

[Scholar](https://scholar.google.com/citations?user=r9BSOjgAAAAJ&hl=en) / [GitHub](https://github.com/junxi25liu)

<!-- TODO: add Email, CV, and other links once available -->

## Research Interests

<div class="interest-grid">
  <div class="interest-card">
    <span class="interest-icon">&#9889;</span>
    <span class="interest-title">Efficient generation</span>
    <span class="interest-body">Cutting the sampling cost of flow- and diffusion-based audio models, so good audio comes out in one or very few steps.</span>
  </div>
  <div class="interest-card">
    <span class="interest-icon">&#127911;</span>
    <span class="interest-title">Control &amp; editing</span>
    <span class="interest-body">Giving people precise, intent-level control over what gets generated and how it can be edited afterwards.</span>
  </div>
  <div class="interest-card">
    <span class="interest-icon">&#127919;</span>
    <span class="interest-title">Alignment &amp; evaluation</span>
    <span class="interest-body">Using RL and preference data to align generators with human judgement, and benchmarks that check whether it worked.</span>
  </div>
</div>

## News

<ul class="news-list">
  <li><span class="news-date">Jun. 2026</span> <a href="https://arxiv.org/abs/2606.07397">Audio-Oscar</a>, <a href="https://arxiv.org/abs/2606.07229">MMAE</a>, and <a href="https://arxiv.org/abs/2606.09098">HoliDubber</a> are on arXiv.</li>
  <li><span class="news-date">Jun. 2026</span> <a href="https://arxiv.org/abs/2603.11661">Resonate</a> is accepted by Interspeech 2026.</li>
  <li><span class="news-date">Apr. 2026</span> <a href="https://arxiv.org/abs/2508.06098">MeanAudio</a> is accepted by ACL 2026 Main.</li>
  <li><span class="news-date">Feb. 2026</span> <a href="https://arxiv.org/abs/2602.08794">MOVA</a> is on arXiv.</li>
</ul>

## Selected Publications

A full list is on my [Google Scholar profile](https://scholar.google.com/citations?user=r9BSOjgAAAAJ&hl=en). See also the [Publications](/publications/) page. <sup>\*</sup> denotes equal contribution.

<div class="paper">
  <span class="badge badge--interspeech">Interspeech 2026</span>
  <a class="paper-title" href="https://arxiv.org/abs/2603.11661">Resonate: Reinforcing Text-to-Audio Generation via Online Feedback from Large Audio Language Models</a>
  <span class="paper-authors">Xiquan Li, <strong>Junxi Liu</strong>, Wenxi Chen, Haina Zhu, Ziyang Ma, Xie Chen</span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2603.11661">paper</a><a href="https://github.com/xiquan-li/Resonate">code</a><a href="https://resonatedemo.github.io/">demo</a></span>
  <p class="paper-note">A flow-matching text-to-audio model trained with online RL, using large audio language models as the reward source.</p>
</div>

<div class="paper">
  <span class="badge badge--acl">ACL 2026 Main</span>
  <a class="paper-title" href="https://arxiv.org/abs/2508.06098">MeanAudio: Fast and Faithful Text-to-Audio Generation with Mean Flows</a>
  <span class="paper-authors">Xiquan Li<sup>*</sup>, <strong>Junxi Liu</strong><sup>*</sup>, Yuzhe Liang, Zhikang Niu, Wenxi Chen, Xie Chen</span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2508.06098">paper</a><a href="https://github.com/xiquan-li/MeanAudio">code</a><a href="https://meanaudio.github.io/">demo</a></span>
  <p class="paper-note">Single-step text-to-audio via MeanFlow &mdash; RTF 0.013 on one RTX 3090, a 100x speedup over diffusion-based systems.</p>
</div>

<div class="paper">
  <span class="badge badge--arxiv">arXiv 2026</span>
  <a class="paper-title" href="https://arxiv.org/abs/2606.09098">HoliDubber: Holistic Video Dubbing for Complex Acoustic Scenes via Text-Guided Audio Synthesis</a>
  <span class="paper-authors">Wenhao Guan, Yifan Duan, <strong>Junxi Liu</strong>, Yu Gu, Feng Dang, Kaidi Wang, Qingyang Hong, Lin Li, Xie Chen</span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2606.09098">paper</a></span>
  <p class="paper-note">Dubbing that rebuilds the whole acoustic scene, not just the speech track.</p>
</div>

<div class="paper">
  <span class="badge badge--arxiv">arXiv 2026</span>
  <a class="paper-title" href="https://arxiv.org/abs/2606.07397">Audio-Oscar: A Multi-Agent System for Complex Audio Scene Generation, Orchestration, and Refinement</a>
  <span class="paper-authors">Yifan Duan, Qixiang Xu, Hengtao Wu, Zhanxun Liu, Wenhao Guan, <strong>Junxi Liu</strong>, Ziyang Ma, Kelu Xu, Xie Chen</span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2606.07397">paper</a></span>
  <p class="paper-note">Agents that generate, arrange, and iteratively refine long multi-event soundscapes.</p>
</div>

<div class="paper">
  <span class="badge badge--arxiv">arXiv 2026</span>
  <a class="paper-title" href="https://arxiv.org/abs/2602.08794">MOVA: Towards Scalable and Synchronized Video-Audio Generation</a>
  <span class="paper-authors">SII-OpenMOSS Team, including <strong>Junxi Liu</strong></span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2602.08794">paper</a></span>
  <p class="paper-note">Joint video-audio generation that stays in sync as it scales.</p>
</div>

<div class="paper">
  <span class="badge badge--arxiv">arXiv 2026</span>
  <a class="paper-title" href="https://arxiv.org/abs/2606.07229">MMAE: A Massive Multitask Audio Editing Benchmark</a>
  <span class="paper-authors">Ziyang Ma, Ruiqi Yan, Ruiyang Xu, et al., including <strong>Junxi Liu</strong></span>
  <span class="paper-links"><a href="https://arxiv.org/abs/2606.07229">paper</a></span>
  <p class="paper-note">A large-scale benchmark for audio editing across many task types under one protocol.</p>
</div>

## Education

**University of Electronic Science and Technology of China**, Chengdu, China  
B.E. in Software Engineering, 2023 - 2027 (expected)

## Experience

[X-LANCE Lab](https://x-lance.github.io), **Shanghai Jiao Tong University**, Shanghai, China  
Research Intern  
Advisor: [Prof. Xie Chen](https://chenxie95.github.io)
