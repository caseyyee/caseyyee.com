---
layout: base.njk
title: c.y
---

# WebVR Content Tools

The content ecosystem of VR at this early stage, is predominatly games. A lot of this has a lot to do with the fact that many of the skills, processes and technology is particularly well suited to developing VR content. Early on at Mozilla, we recognized that there are many potential applications beyond just games, and if we could enable designers and developers to use their existing web skills to create content, we could potentially bring along the content, communities and web technologies that make the Web so exciting into VR.

We've tried many things along the way, but here is a sampling of some of successes and attempts that I was part of.

* [WebVR Javascript API](#webvr-browser-api)
* [Unity-WebVR-Assets](#unity-webvr-assets)
* [A-Frame](#aframe)
* [A-Frame UI Widgets](#aframe-ui-widgets)
* [Sketch2three](#sketch2three)

## <a name="webvr-browser-api"></a>WebVR Browser API

https://www.youtube.com/watch?v=Le8pTXQqM3s

Together with Vladimir Vukicevic (Creator of WebGL), Josh Carpenter, and Kip Kearwood, we investigated two different approaches that we looked at for rendering web content into VR.  WebGL, the API that allows for rendering of 3D content into the browser, and HTML and CSS, extending on the CSS transform capabilities that were already in place.  Both have their merits (which at some point in the future I intend to write about), but we ultimately designed around what was most practical at the time, and that was WebGL. The implementation includes the ability to acquire VR headset and controller data that content needs to render a appropriate view into the headset using Javascript in the browser.

The WebVR API was first implemented into the Firefox desktop browser with the Oculus VR headset. In this video, we demonstrate WebVR enabled content rendering into a VR headset.

(Enter VR flow)
(CSS-VR capture, code)

* [WebXR specification to succeed WebVR API](https://github.com/immersive-web/webxr/).
* [W3C Workshop on Web and Virtual Reality: A Look Ahead](https://hacks.mozilla.org/2016/12/w3c-workshop-on-web-and-virtual-reality-a-look-ahead/)
* [WebVR API Proposal](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/)


## <a name="aframe"></a>A-Frame

The design intent of A-Frame was to re-create the simplicity of content creation of the early web using simple HTML markup. This project was built on top of three.js and uses custom-element web components to provide a very easy-to-use and understand interface for creating VR content requiring no additional code.



## <a name="unity-webvr-assets"></a>🕹 Unity WebVR Assets

<img src="{{ "/img/unity-assets.gif" | url }}">

A significant number of VR content creators are using Unity, and with the emergence of browser technology like [Web Assembly](), it was now possible to run high performance native applications and games within the Web browser environment. Because content runs in the browser, it also means content has access to all the web browser API's, including WebVR. The WebVR-Assets were built to make it easy for Unity VR developers to create applications using Unity, but also make it possible to be shared and available on the Web as part of the same code base.

Project Links

* [Unity Asset Store](https://assetstore.unity.com/packages/templates/systems/webvr-assets-109152)
* [Github Project](https://github.com/mozilla/unity-webvr-export)
* [Mozilla Hacks Post](https://hacks.mozilla.org/2018/02/create-vr-on-the-web-using-unity3d)


## <a name="aframe-ui-widgets"></a>🎚🎛 A-Frame UI widgets

<img src="{{ "/img/aframe-ui-widgets.gif" | url }}">

One of the most challenging areas of VR is designing interactions that are easy to understand and use. I built the UI widget A-Frame components to provide a starting set of controls that modeled physical controls that one would be familiar with using in the real-world. There was a few adjustments made to accomodate the challenges of VR, but users found this to be natural and intuitive and required very little learning to use.

Project Links

* [Github](https://github.com/caseyyee/aframe-ui-widgets/)

## <a name="sketch2three"></a>Sketch2three

<img src="{{ "/img/sketch2three.gif" | url }}">

Project links
* [Github](https://github.com/caseyyee/aframe-ui-widgets/)

