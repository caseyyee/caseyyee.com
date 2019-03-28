---
layout: post.njk
title: Firefox Reality - Casey Yee
---

# Firefox Reality: VR Web Browser

## <a name="fxr"></a>A new way to experience the Web

Firefox Reality is a web browser that is designed from the ground up to work on standalone Virtual Reality headsets like the Oculus Go and Google Daydream.

<!-- ![Firefox Reality Web Browser using Oculus Go mobile VR headset](/img/fxr/fxr-sketch.png) -->

![Firefox Reality web browser using Oculus Go headset](/img/fxr/fxr-content.png)
*Firefox Reality using the Oculus Go headset*

Some of the features I helped ship include, immersive 360 and stereo playback, theatre viewing modes, private browsing modes and immersive WebVR capabilities. In addition to this, I worked on web compatability issues, and  worked with content partners to ship experiences to the content feed.

Firefox Reality is the latest evolution of the VR web browser, which we had been exploring since 2014.

* [Explore the Immersive Web with Firefox Reality.](https://blog.mozilla.org/blog/2018/09/18/firefox-reality-now-available/)
* [Firefox Reality version 1.1 announcement.](https://www.techcarving.com/2018/12/mozilla-firefox-reality-1-1-update-is-now-available-to-download-with-360-video-support-and-more/)

## <a name="prototypes"></a>Browser prototypes and concepts

### <a name="desktop"></a>Desktop WebVR

At its earliest stages, [WebVR](https://blog.mozvr.com/webvr-lands-in-firefox-nightly/) started as an extension to the desktop Firefox browsing experience. With the creation of the [WebVR API](../webvr-tools/#webvr-browser-api), web pages can use JavaScript to access a VR headset’s headset &amp; controller orientation &amp; position data, then using that data to render the appropriate stereoscopic views using WebGL into the VR headset.

![Desktop WebVR on Firefox using Oculus DK2 VR headset](/img/fxr/desktop-vr.gif)
*MozVR website running MozVR’s “Sechelt” WebVR demo on Desktop Firefox in WebVR using the Oculus DK2 VR headset.*

![Ben Lang from RoadToVR trying out Rainbow Membrand by Cabbibo](/img/fxr/rainbow-membrane.jpg)
*[Ben Lang](https://twitter.com/benz145) from [_Road to VR_](https://www.roadtovr.com/) trying out “Rainbow Membrane” by [Cabbibo](https://twitter.com/Cabbibo)*

### <a name="hiro"></a>HIRO

[HIRO](https://github.com/MozillaReality/hiro) was the first experiment in VR browser design that I worked on with [Josh Carpenter](https://twitter.com/joshcarpenter) and [Vlad Vukecevic](https://twitter.com/vvuk). The goal was to demonstrate what web-browsing in VR could be like. HIRO debuted at GDC 2015, and successfully kickstarted interest in WebVR from the likes of Google, Samsung, Microsoft, Oculus, W3C, in addition to many others. We also had a fantastic group of early-adopter content creators who contributed many experiments and ideas along the way.

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/KlZnKW2qVZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

*Browser navigation concept with fully immersive 3D interface, demonstrating home page to 360° content navigation, loading, and transitions.*

At the time, game controllers were not yet readility available, so we partnered with [Leap Motion](https://www.leapmotion.com/) to integrate a hand-tracking solution for more natural interactions.

* [HIRO GitHub Source](https://github.com/MozillaReality/hiro)

### <a name="horizon"></a>Horizon

[Horizon](https://github.com/MozillaReality/horizon) was the first VR web browser to include immersive browsing along with a standard web viewport. I built this along with [Josh Carpenter](http://twitter.com/joshcarpenter), [Kevin Grandon](https://twitter.com/Kevining), [Chris Van Wiemeersch](https://twitter.com/cvanw), [Kearwood “Kip” Gilbert](https://twitter.com/kearwoodgilbert), and [Vlad Vukecevic](http://twitter.com/vvuk).

<div class="video-raw-wrapper">
  <video class="video-raw" preload controls>
    <source src="{{ "/img/horizon-browser.mp4" | url }}" />
  </video>
</div>

*Demonstrates 2D and immersive VR web-browsing.*

Horizon was siginificant in that the entire browser interface was built using [CSS-VR](/projects/webvr-tools/#webvr-api).

* [Horizon GitHub Source](https://github.com/MozillaReality/horizon)

## <a name="more"></a>Additional things to check out

* [See WebVR tools that I helped build](../webvr-tools)
* [Josh Carpenter on VR Browsing Explorations](http://www.joshcarpenter.ca/vr-browsing-explorations)
* [_Puzzle Rain_](https://blog.mozvr.com/puzzle-rain/), a WebVR experience by [Arturo Paracuellos](arturitu) in collaboration with Mozilla
* [Navigating Virtual Links in VR](https://blog.mozvr.com/connecting-virtual-worlds-hyperlinks-in-webvr/)
* [EtherWorld](https://github.com/EtherWorld/EtherWorld/), a multiuser online VR world builder (built on top of Voxel.js)
