---
layout: post.njk
title: Casey Yee - Firefox Reality
---

# Firefox Reality VR Web Browser

## A new way to experience the Web

Firefox Reality is a web browser that has been designed from the ground up to work on stand-alone virtual reality headsets like the Oculus Go and Google Daydream.

<!-- ![Firefox Reality Web Browser using Oculus Go mobile VR headset](/img/fxr/fxr-sketch.png) -->

![Firefox Reality Web Browser using Oculus Go mobile VR headset](/img/fxr/fxr-content.png)
*Firefox Reality Web Browser using Oculus Go mobile VR headset*

Some of the features I helped ship include, immersive 360 and stereo playback, theatre viewing modes, private browsing modes and immersive WebVR capabilities. In addition to this, I worked on web compatability issues, and  worked with content partners to ship experiences to the content feed.

Firefox Reality is the latest evolution of the VR web browser, which we have been exploring since 2012.

* [Explore the immersive web with Firefox Reality.](https://blog.mozilla.org/blog/2018/09/18/firefox-reality-now-available/)
* [Firefox Reality 1.1 Update](https://www.techcarving.com/2018/12/mozilla-firefox-reality-1-1-update-is-now-available-to-download-with-360-video-support-and-more/)
## Browser prototypes and concepts

### Desktop WebVR

At its earliest stages, WebVR started as an extension to the desktop Firefox browsing experience. The creation of the [WebVR API's](../webvr-tools/#webvr-browser-api) made it possible for content to access VR headset and controller orientation and position data, which is then used to render the appropriate stereoscopic views using WebGL into the VR headset.

![Desktop WebVR on Firefox using Oculus DK2 VR headset](/img/fxr/desktop-vr.gif)
*MozVR website running "Sechelt" experience on Desktop Firefox in WebVR using Oculus DK2 VR headset after "Entering VR"*

![Ben Lang from RoadToVR trying out Rainbow Membrand by Cabbibo](/img/fxr/rainbow-membrane.jpg)
*Ben Lang from RoadToVR trying out Rainbow Membrand by Cabbibo*

### HIRO

HIRO was the first experiment in VR browser design that I worked on with [Josh Carpenter](http://twitter.com/joshcarpenter) and [Vlad Vukecevic](http://twitter.com/vvuk). The goal was to demonstrate what browsing in VR could be like. HIRO was first debuted at GDC 2015, and was successful in kickstarted interest in WebVR from the likes of Google, Samsung, Microsoft, Oculus, W3C in addition to many others. We also had a fantastic group of early content creators who contributed many experiments and ideas along the way.

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/KlZnKW2qVZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

*Browser navigation concept with fully immersive 3D interface, demonstrating home page to 360 content navigation, loading and transitions.*

At the time, controller solutions were not yet readility available, so we partnered with LEAP motion to integrate a hand-tracking solution for more natural interactions.

* [HIRO Github Source](https://github.com/MozillaReality/hiro)

### Horizon

Horizon was the first VR web browser to include immersive mode browsing along with a standard web viewport. I helped build this along with [Josh Carpenter](http://twitter.com/joshcarpenter), [Kevin Grandon](https://twitter.com/Kevining), [Chris Wiemeersch](https://twitter.com/cvanw), [Kearwood "Kip" Gilbert](https://twitter.com/kearwoodgilbert) and [Vlad Vukecevic](http://twitter.com/vvuk).

<div class="video-raw-wrapper">
  <video class="video-raw" preload controls>
    <source src="{{ "/img/horizon-browser.mp4" | url }}" />
  </video>
</div>

*Demonstrates 2D and immersive VR Web browsing.*

Horizon was siginificant in that the entire browser interface was built using CSS-VR. [Learn more about CSS-VR](http://localhost:8080/projects/webvr-tools/#webvr-api)

## Additional things to checkout

* [See WebVR tools that I help build](../webvr-tools)
* [Josh Carpenter on VR Browsing Explorations](http://www.joshcarpenter.ca/vr-browsing-explorations)
* [Puzzle Rain](https://blog.mozvr.com/puzzle-rain/), WebVR experience by [Arturo Paracuellos](arturitu) in collaboration with Mozilla.
* [VR Link traversal](https://blog.mozvr.com/connecting-virtual-worlds-hyperlinks-in-webvr/)
* [Etherworld Voxel.js based multi-user VR world](https://github.com/EtherWorld/EtherWorld/)


