---
layout: post.njk
title: Casey Yee - WebVR Content Tools
---

# WebVR Content Tools

## The mission was to build tools and experiences that would lead the way for creators to hop-in and experiment with WebVR.

The content ecosystem of VR at this early stage, is predominatly games. A lot of this has a lot to do with the fact that many of the skills, processes and technology is particularly well suited to developing VR content. Early on at Mozilla, we recognized that there are many potential applications beyond just games, and if we could enable designers and developers to use their existing web skills to create content, we could potentially bring along the content, communities and web technologies that make the Web so exciting into VR.

We've tried many things along the way, but here is a sampling of some of successes and attempts that I was part of.

<h3>
  <a class="bordered" href="#webvr-api">WebVR Browser API</a>
  <a class="bordered" href="#unity-webvr-assets">Unity WebVR Assets</a>
  <a class="bordered" href="#unity-webvr-assets">A-Frame</a>
  <a class="bordered" href="#unity-webvr-assets">UI Widgets</a>
  <a class="bordered" href="#unity-webvr-assets">Sketch2three</a>
</h3>

<!-- * [WebVR Javascript API](#webvr-browser-api)
* [Unity-WebVR-Assets](#unity-webvr-assets)
* [A-Frame](#aframe)
* [A-Frame UI Widgets](#aframe-ui-widgets)
* [Sketch2three](#sketch2three) -->

## <a name="webvr-api"></a>WebVR Browser API

<div class="video-wrapper">
  <iframe src="https://www.youtube-nocookie.com/embed/Le8pTXQqM3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

We investigated two different approaches that we looked at for rendering web content into VR.  WebGL, the API that allows for rendering of 3D content into the browser, and HTML and CSS, extending on the CSS transform capabilities that were already in place.  Both have their merits (which at some point in the future I intend to write about), but we ultimately designed around what was most practical at the time, and that was WebGL. The implementation includes the ability to acquire VR headset and controller data that content needs to render a appropriate view into the headset using Javascript in the browser.

The WebVR API was first implemented into the Firefox desktop browser with the Oculus VR headset. In this video, we demonstrate WebVR enabled content rendering into a VR headset.

(Enter VR flow)
(CSS-VR capture, code)

* [WebXR specification to succeed WebVR API](https://github.com/immersive-web/webxr/).
* [W3C Workshop on Web and Virtual Reality: A Look Ahead](https://hacks.mozilla.org/2016/12/w3c-workshop-on-web-and-virtual-reality-a-look-ahead/)
* [WebVR API Proposal](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/)

### Two very different approaches

![Early CSS-VR experiments showing DIV's rendering into Oculus Rift headset](/img/css-vr.png)
*Early CSS-VR experiments showing DIV's rendering into Oculus Rift headset*

Encouraged by incredible work like [Tridiv](http://tridiv.com/) and [CSS FPS by Keith Clark](https://keithclark.co.uk/labs/css-fps/), it seemed that CSS might possible be capable of being a useabe engine for VR rendering.

CSS VR and WebGL options. CSS-VR ultimately ended up being to complex. VR capabilities were a moving target and the complexity of the CSS rendering engine proved to be a obstacle.

Advantages of CSS included delclarative nature, rendering and provided basic interaction within the browser.

Advantages of WebGL, non prescriptive and totally left to the content creator how to create, render and interact with the scene.

* [Github CSS-VR Examples](https://github.com/caseyyee/experiment-cssvr)

## <a name="unity-webvr-assets"></a>🕹 Unity WebVR Assets

<img src="{{ "/img/unity-assets.gif" | url }}">

A significant portion of VR content creators use Unity, a leading game content creation tool. With the emergence of browser technology like [Web Assembly](), it was now possible to run high performance native applications and games within the Web browser environment. Because content runs in the browser, it also means content has access to all the web browser API's, including WebVR. The WebVR-Assets were built to make it easy for Unity VR developers to create applications using Unity, but also make it possible to be shared and available on the Web as part of the same code base.

Project Links

* [Unity Asset Store](https://assetstore.unity.com/packages/templates/systems/webvr-assets-109152)
* [Github Project](https://github.com/mozilla/unity-webvr-export)
* [Mozilla Hacks Post](https://hacks.mozilla.org/2018/02/create-vr-on-the-web-using-unity3d)

## <a name="aframe"></a>A-Frame

<img src="{{ "/img/aframe.gif" | url }}">

<img src="{{ "/img/aframe/markup.png" | url }}">

The main design goal of A-Frame was to create a simple, and easy to use library that would allow anyone to create WebVR content with just simple HTML markup. The library was built on top of three.js and uses custom-element web components.

## <a name="aframe-ui-widgets"></a>🎚🎛 A-Frame UI widgets

<img src="{{ "/img/aframe-ui-widgets.gif" | url }}">

One of the most challenging areas of VR is designing interactions that are easy to understand and use. I built the UI widget A-Frame components to provide a starting set of controls that modeled physical controls that one would be familiar with using in the real-world. There was a few adjustments made to accomodate the challenges of VR, but users found this to be natural and intuitive and required very little learning to use.

Project Links

* [Github](https://github.com/caseyyee/aframe-ui-widgets/)

## <a name="sketch2three"></a>Sketch2three

<img src="{{ "/img/sketch2three.gif" | url }}">

One of the earliest challenges facing us when creating UI in VR was that lack of any way to create content layouts in VR.  To solve this, we created several workflow tools that would enable quick iteration of designs in HTML and design tools like Sketch, and export that content into a editable form in the web browser. This lead to extremely quick results that we could view in VR that allowed us to quickly iterate over several designs. The tool was used to build [HIRO](), [Horizon]() and other incarnation of VR web browser concepts.

Project links

* [Github](https://github.com/caseyyee/aframe-ui-widgets/)

