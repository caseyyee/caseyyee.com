---
layout: post.njk
title: Medoptic - Casey Yee
---

# Medoptic Realtime VR Training Platform

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/km2YqfIjBMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_Promo video of Medoptic training platform_

## VR in training

Medical training is a highly specialized activity, for any given procedure there is a limited amount of expertise. This means that training is very centralized, often requiring travel, added risk factors in the OR and logistical difficulties with timing, equipment and availability. And as a result, limits opportunities for training.

The Medoptic platform specifically targets to make medical training more scalable, accessible and cost effective than in-person training. The platform utilizes high-performance 6K Stereoscopic VR Video streaming, highly collaborative multi-user environments and a telemetry package to track user engagement and training outcomes.

Additionally, the platform also includes the ability to integrate multiple cameras, medical instrumentation, device views and data to provide an advanced view into how decisions are made during procedures.

![Medoptic app suite](/img/medoptic/vr-apps.gif)

_Medoptic mobile app, moderation app and VR client view during training_

## Product Features

- Highly intuitive and easy to use interface and UX.
- Setup, Invite participants and start streams in less than a minute.
- Real-time high-resolution immersive 6K stereoscopic VR capture.
- Multiple cameras and specialty device integration with endoscopes, robotics, information and data displays.
- Highly interactive multi-user environment enables remote participants and training host to ask questions and discuss procedures.
- Realtime user telemetry to measure user engagement and learning outcomes.
- Companion Application for users to manage scheduling and participation in events.
- All in-one hardware integrated into a single portable cart.

![Interface design](/img/medoptic/streamer-interface.png)

_UX Wireframes, product topology and my desk in Tampa HQ_

## Challanges

### User Experience

Surgeons, doctors and educators in the medical training field deal with a lot of complexity. Their environments are cluttered with equipment, strict procedures and challenged with high expectations. Adding any product to this environment is difficult at the best of times, so ensuring that the various touch points for each role was mapped out, and key functions used to operate the system are easy and intuitive was incredibly important.

### Hardware

The challenge was to have training to be as close to an in-person experience as possible, this means having high-resolution cameras and audio equipment in close proximity to the operating area. Supporting equipment such as streaming hardware, touch panel to operate and interact with trainees, connectivity and even thermals of the entire system were all iterated many times over to create a compact, self-contained cart easily moved between clinic, hospitals and training environments.

### VR

We're still in the initial adoption phase for VR technology. Because of this, the usage of these devices is not well understood by users. A large part of designing the system includes training users how to use VR and making it as easy and effortless as possible.

### Performance

Streaming high-resolution video at 6k was a technical challenge, and especially difficult for the mobile headsets to achieve. The VR client built in WebXR achieves 70+fps required to ensure user comfort but also support multiple users at any given time interacting with the host and other users. This is especially important considering that some training can last several hours at a time.

### Other challenges we encountered

- Privacy & Security
- Regulatory and compliance

![Interface design](/img/medoptic/working.gif)

_Late evenings hacking_

### Engineering and Engineering Management

My responsibilities:

- Lead role in software engineering and engineering management for key components of product, including infrastructure, services and VR, mobile and desktop VR client applications.
- Software architecture and data design.
- UX Design, Interface prototyping and development.
- Worked closely with the research team to optimize for the product for learning outcomes.
- Worked with sales, product, marketing and design to drive product design requirements.
- Worked closely with the hardware and operations team to ensure tight integration of various software and hardware components.
- Worked with senior leadership to develop processes around milestone planning and tracking.
- Repository and source code management.
- Team communication tools.
- Quality assurance, defect tracking and error reporting.
- Telemetry and data collection tooling.
- Mentorship.

![Medoptic team](/img/medoptic/team.png)

_Immertec operations_

### Technologies

- Javascript, WebXR, WebGL
- React, React Native
- Node.js
- WebRTC
- Unity

## Additional information

- [Immertec Product Page](https://immertec.com/)
