---
layout: post.njk
title: Casey Yee - WebVR Tools
---

# WebVR Content Tools

The challenge for WebVR, is to get people creating content.
To solve this, I helped create a number of tools and experiences that helped kickstart interest in creating WebVR content. We also used these tools for our own explorations and prototyping.

<h3>
  <a class="bordered" href="#webvr-api">WebVR Browser API</a>
  <a class="bordered" href="#unity-webvr-assets">Unity WebVR Assets</a>
  <a class="bordered" href="#aframe">A-Frame</a><br/>
  <a class="bordered" href="#aframe-ui-widgets">UI Widgets</a>
  <a class="bordered" href="#puzzle-rain">Puzzle Rain</a>
  <a class="bordered" href="#sketch2three">Sketch2three</a>
</h3>

<br/>

## <a name="unity-webvr-assets"></a>🕹 Unity WebVR Assets

<img src="{{ "/img/unity-assets.gif" | url }}">

The Unity-WebVR-Assets were built to make it easy for VR content creators using Unity, a popular game development platform, to export their experiences for use in WebVR. The goal was to have content, which was available on native, brought over to help make more WebVR content available.

* [Unity Asset Store](https://assetstore.unity.com/packages/templates/systems/webvr-assets-109152)
* [Github Project](https://github.com/mozilla/unity-webvr-export)
* [Mozilla Hacks Post](https://hacks.mozilla.org/2018/02/create-vr-on-the-web-using-unity3d)

## <a name="aframe"></a>A-Frame

<img src="{{ "/img/aframe/aframe.gif" | url }}">

<img src="{{ "/img/aframe/markup.png" | url }}">

The main design goal of A-Frame was to create a simple, and easy to use library that would allow anyone to create WebVR content with just simple HTML markup. The library was built on top of three.js and uses custom-element web components.

* [A-Frame website](https://aframe.io)
* [See mentions](../posts)

## <a name="aframe-ui-widgets"></a>🎚🎛 A-Frame UI widgets

<img src="{{ "/img/aframe-ui-widgets.gif" | url }}">

One of the most challenging areas of VR is designing interactions that are easy to understand and use. I built the UI widget A-Frame components to provide a starting set of controls that modeled physical controls that one would be familiar with using in the real-world.

* [Github Project](https://github.com/caseyyee/aframe-ui-widgets/)

## <a name="webvr-api"></a>WebVR Browser API

<div class="video-wrapper">
  <iframe src="https://www.youtube-nocookie.com/embed/Le8pTXQqM3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The WebVR browser API makes it possible for web content to access VR headset and controller orientation and position data, which is then used to render the appropriate stereoscopic views using WebGL into the VR headset. I helped with the early design and testing in its earliest stages with [Kearwood "Kip" Gilbert](https://twitter.com/kearwoodgilbert), [Chris Wiemeersch](https://twitter.com/cvanw) and [Brandon Jones](https://twitter.com/kear) (Google).

### Early CSS-VR explorations

![Early CSS-VR experiments showing DIV's rendering into Oculus Rift headset](/img/content-tools/css-vr.png)
*Early CSS-VR experiments showing DIV's rendering into Oculus Rift headset*

Encouraged by incredible work like [Tridiv](http://tridiv.com/) and [CSS FPS by Keith Clark](https://keithclark.co.uk/labs/css-fps/), we experimented with using CSS as a way to render WebVR content.

The [Horizon web browser](firefox-reality) interface was built exclusively from CSS-VR.

* [Github CSS-VR Examples](https://github.com/caseyyee/experiment-cssvr)

### Additional information

* [WebXR specification to succeed WebVR API](https://github.com/immersive-web/webxr/).
* [W3C Workshop on Web and Virtual Reality: A Look Ahead](https://hacks.mozilla.org/2016/12/w3c-workshop-on-web-and-virtual-reality-a-look-ahead/)
* [Introducing the WebVR 1.0 API Proposal](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/)

## <a name="puzzle-rain"></a>Puzzle Rain Experience

<img src="{{ "/img/content-tools/puzzle-rain.jpg" | url }}">

Puzzle Rain is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!

The experience was a collaboration between [Arturo Paracuellos](http://unboring.net/) and Mozilla.

* [Puzzle Rain Blog Post](https://blog.mozvr.com/puzzle-rain/)
* [Github Project](https://github.com/mozvr/puzzle-rain)

## <a name="sketch2three"></a>Sketch2three

<img src="{{ "/img/sketch2three.gif" | url }}">

One of the earliest challenges facing us when creating UI, was that lack of  VR layout tools.  To solve this, I created a workflow tool that would enable quick iteration of designs in Sketch, viewable and editable within the browser, in WebVR.

This lead to extremely quick results allowed us to quickly iterate over several designs. The tool was used to create [HIRO](), [Horizon]() and other incarnation of VR web browser concepts.

* [Github Project](https://github.com/caseyyee/aframe-ui-widgets/)

