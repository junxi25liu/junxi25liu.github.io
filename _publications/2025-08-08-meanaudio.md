---
title: "MeanAudio: Fast and Faithful Text-to-Audio Generation with Mean Flows"
collection: publications
category: conferences
permalink: /publication/2025-08-08-meanaudio
excerpt: 'A fast and faithful text-to-audio generator that incorporates MeanFlow for single-step synthesis, achieving an RTF of 0.013 on a single RTX 3090.'
date: 2025-08-08
venue: 'ACL 2026 (Main)'
paperurl: 'https://arxiv.org/abs/2508.06098'
codeurl: 'https://github.com/xiquan-li/MeanAudio'
demourl: 'https://meanaudio.github.io/'
citation: 'Xiquan Li*, <b>Junxi Liu*</b>, Yuzhe Liang, Zhikang Niu, Wenxi Chen, Xie Chen. (2026). &quot;MeanAudio: Fast and Faithful Text-to-Audio Generation with Mean Flows.&quot; <i>ACL 2026 (Main)</i>.'
---

Xiquan Li\*, **Junxi Liu\***, Yuzhe Liang, Zhikang Niu, Wenxi Chen, Xie Chen (\* equal contribution)

[paper](https://arxiv.org/abs/2508.06098) / [code](https://github.com/xiquan-li/MeanAudio) / [demo](https://meanaudio.github.io/)

MeanAudio is a MeanFlow-based model for fast and faithful text-to-audio generation. Built on a Flux-style latent transformer, it regresses the average velocity field during training, which enables one-step generation by mapping directly from the start to the endpoint of the flow trajectory. Classifier-free guidance is folded into the training target, so guided sampling incurs no extra cost. An instantaneous-to-mean curriculum with flow field mix-up stabilizes training. MeanAudio reaches a real-time factor of 0.013 on a single NVIDIA RTX 3090, a 100x speedup over state-of-the-art diffusion-based systems, while also remaining strong in the multi-step setting.
