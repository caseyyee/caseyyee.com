---
layout: post.njk
title: WebVR Tools - Casey Yee
---

# WebVR Content Tools

The challenge for WebVR, is to get people creating content. To solve this, I helped create a number of tools and experiences that helped kickstart interest in creating WebVR content. We also used these tools for our own explorations and prototypes.

<p>
  <a class="bordered" href="#unity-webvr-assets">Unity WebVR Assets</a>
  <a class="bordered" href="#aframe">A-Frame</a>
  <a class="bordered" href="#aframe-ui-widgets">UI Widgets</a>
  <a class="bordered" href="#webvr-api">WebVR Browser API</a>
  <a class="bordered" href="#puzzle-rain">Puzzle Rain</a>
  <a class="bordered" href="#sketch2three">Sketch2three</a>
</p>

<br>

## <a name="unity-webvr-assets"></a>🕹 Unity WebVR Assets

<img src="{{ "/img/unity-assets.gif" | url }}">

The [Unity WebVR Assets](https://github.com/mozilla/unity-webvr-export) were built to make it easy for VR content creators using Unity, a popular game-development platform, to export their experiences to WebVR. The goal was to have content, which was already available on native, brought over to help make more WebVR content available.

* [Unity Asset Store](https://assetstore.unity.com/packages/templates/systems/webvr-assets-109152)
* [GitHub Project](https://github.com/mozilla/unity-webvr-export)
* [Mozilla Hacks Post](https://hacks.mozilla.org/2018/02/create-vr-on-the-web-using-unity3d)

## <a name="aframe"></a>🅰️ A-Frame

<img src="{{ "/img/aframe/aframe.gif" | url }}" alt="A-Frame website, with loading animation">

<img src="{{ "/img/aframe/markup.png" | url }}" alt="Source code of A-Frame’s “Hello World” example project">

The main design goal of [A-Frame](https://aframe.io/) was to create a simple, and easy to use library that would allow anyone to create WebVR content with just simple HTML markup. The library was built on top of [three.js](https://threejs.org/) and uses web components with [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

* [A-Frame website](https://aframe.io)
* [GitHub Project](https://github.com/aframevr/aframe)
* [Press and mentions](../press)

## <a name="aframe-ui-widgets"></a>🎚🎛 A-Frame UI widgets

<img src="{{ "/img/aframe-ui-widgets.gif" | url }}" alt="Animation of my A-Frame UI widgets">

One of the most challenging areas of VR is designing interactions that are easy to understand and use. I built the [_UI Widgets_ A-Frame components](https://github.com/caseyyee/aframe-ui-widgets/) to provide a starting set of controls that model physical controls that one would be familiar with using in the real world.

* [Github Project](https://github.com/caseyyee/aframe-ui-widgets/)

## <a name="webvr-api"></a>🌐 WebVR Browser API

<div class="video-wrapper">
  <iframe src="https://www.youtube-nocookie.com/embed/Le8pTXQqM3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The [WebVR browser API](https://immersive-web.github.io/webvr/spec/1.1/) makes it possible for web pages can use JavaScript to access a VR headset’s headset &amp; controller orientation &amp; position data, then using that data to render the appropriate stereoscopic views using WebGL into the VR headset. I helped with the early design and testing in its earliest stages with [Kearwood “Kip” Gilbert](https://twitter.com/kearwoodgilbert) (Mozilla), [Chris Van Wiemeersch](https://twitter.com/cvanw) (Mozilla), and [Brandon Jones](https://twitter.com/tojiro) (Google).

### Early CSS-VR explorations

![Early CSS-VR experiments showing <div>s rendering into the Oculus Rift headset](/img/content-tools/css-vr.png)
*Early CSS-VR experiments showing <code>&lt;div&gt;</code>s rendering into the Oculus Rift headset.*

Encouraged by incredible work like [Tridiv](http://tridiv.com/) and [CSS-FPS](https://keithclark.co.uk/labs/css-fps/) by [Keith Clark](keithclarkcouk), we experimented with using CSS as a way to render WebVR content.

The [Horizon web browser](#horizon) interface was built exclusively from CSS-VR.

* [GitHub CSS-VR Examples](https://github.com/caseyyee/experiment-cssvr)

### Additional information

* [WebXR API specification](https://immersive-web.github.io/webvr/spec/1.1/)
* [WebXR API specification](https://immersive-web.github.io/webxr/)
* [Mozilla Hacks: _W3C Workshop on Web and Virtual Reality: A Look Ahead_](https://hacks.mozilla.org/2016/12/w3c-workshop-on-web-and-virtual-reality-a-look-ahead/)
* [Mozilla Hacks: _Introducing the WebVR 1.0 API Proposal_](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/)

## <a name="puzzle-rain"></a>☔ _Puzzle Rain_ experience

<img src="{{ "/img/content-tools/puzzle-rain.jpg" | url }}" alt="Puzzle Rain">

[_Puzzle Rain_](https://mixedreality.mozilla.org/puzzle-rain/) is a musical journey in which you help awaken and guide mythical creatures back together into happy musical harmony with one another. Only their combined musical chorus can summon life-giving rain to revive the parched and desolate landscape. Though, there isn’t much time. Dangerous predators roam!

This experience was a collaboration between [Arturo Paracuellos](http://unboring.net/) and Mozilla.

* [Puzzle Rain Blog Post](https://blog.mozvr.com/puzzle-rain/)
* [GitHub Project](https://github.com/mozvr/puzzle-rain)

## <a name="sketch2three"></a>🎨 Sketch2three

<img src="{{ "/img/sketch2three.gif" | url }}" alt="Sketch2three">

One of the earliest challenges facing us when creating UI was that lack of tools for designing 2D layouts in VR. To solve this, I created a workflow tool that enabled designers to quickly iterate designs in Sketch and then view/edit them within the browser via WebVR.

This lead to extremely quick results that allowed us to quickly iterate over several designs for various VR browser explorations, such as [HIRO](#hiro), [Horizon](#horizon), and other early incarnations of VR web-browser concepts.

* [GitHub Project](https://github.com/caseyyee/aframe-ui-widgets/)