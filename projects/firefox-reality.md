---
layout: base.njk
title: Casey Yee - Firefox Reality VR Web Browser
---

# Firefox Reality VR Web Browser

![Firefox Reality Web Browser using Oculus Go mobile VR headset](/img/fxr-content.png)
*Firefox Reality Web Browser using Oculus Go mobile VR headset*

* [Explore the immersive web with Firefox Reality. Now available for Viveport, Oculus, and Daydream](https://blog.mozilla.org/blog/2018/09/18/firefox-reality-now-available/)

## Browser prototypes and concepts

With the introduction of Virtual Reality in the form of the Oculus Rift, launched as a successful Kickstarter campaign in 2012, it was clear to a small group of us at Mozilla that this was a important and ground-breaking technology that we needed to explore. The ability to be able to immerse yourself into a completely digital world was not a new idea and has been a fanticised about for decades in science fiction and anime. These in-fact were pioneered and explored for decades up to this point in various University labs. but the fact that it was being offered as a device that was available to the average consumer at prices never before seen, was a cue that maybe, we are seeing a start to a major shift in the ability for this tecnology to be accessible to your average consumers and put to real use and spur a revolution in design, technology and my personal interest, how we interact with information, data, and eachother in the future.

Putting on the headset, I was immediately struck by the ability to see objects drawn our in front of me stereoscopically, which gave a sense of volume that I had never before seen. You can describe what you were seeing in terms that were different than you would associate with traditional computer displays. What you were seeing could be described in size, volume and orientation, and in fact feeling and emotion tied to the space (or lack of) and environment created within the headset.

Indeed, we have seen some adoption of the technolgy through a almost inveitable boom and subsequent "bust" of VR technology, but VR continues to rage on and despite many sentiments, there continues to be growth and investment into the space with major players investing heavily into developing the tecnology and the applications for VR.

the web needed to play a role in this future.  At it's basic level, you need to still be able to access the web just as you have been for the last several decades, and so a browser needs to be built to accomodate that.

and the momentum continues to grow, but experiences would be dominated by tools that catered to the development of game software rather than web development.  The patterns, design and skillset needed to work on VR content

### Desktop WebVR

At its earliest stages working with Vlad Vukecevic, WebVR started as a simple extension to the 2D desktop browsing experience. When _Entering VR_, content would be stereoscopically rendered using WebGL into the attatched VR headset.

![Desktop WebVR on Firefox using Oculus DK2 VR headset](/img/desktop-vr.gif)

*MozVR website running "Sechelt" experience on Desktop Firefox in WebVR using Oculus DK2 VR headset*

### HIRO

HIRO was the first experiment in VR browser design that I worked with Josh Carpenter, Kip Gilbert and Vlad Vukecevic. The goal was to design a concept that would demonstrate what browsing in VR could be like. HIRO was first debuted at GDC 201? and really kickstarted interest from the likes of Google, Samsung, Microsoft, Oculus and a fantastic group of content creators.

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/KlZnKW2qVZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

*Browser navigation concept with fully immersive 3D interface, demonstrating home page to 360 content navigation, loading and transitions.*

At the time, controller solutions were not yet readility available, so we partnered with LEAP motion to experiment with, and integrate a hand-tracking solution for more natural interactions.

### Horizon

Horizon, the worlds first VR web browser to include immersive mode browsing along with back-wards compatible 2D web view. Built with Josh Carpenter, Kevin Grandon, Chris Wiemeersch,, Kip Gilbert and Vlad Vukecevic.

<div class="video-raw-wrapper">
  <video class="video-raw" preload controls>
    <source src="{{ "/img/horizon-browser.mp4" | url }}" />
  </video>
</div>

*Demonstrates 2D and immersive VR Web browsing. The browser UI created using CSS-VR*

## Additional articles of interest

* [WebVR Tools](../webvr-tools);
* [HIRO Github Source](https://github.com/MozillaReality/hiro)
* [Josh Carpenter on VR Browsing Explorations.](http://www.joshcarpenter.ca/vr-browsing-explorations)
* [WebVR API](../webvr-tools#webvr-api)

## Explorations in VR

* [Puzzle Rain](https://blog.mozvr.com/puzzle-rain/), WebVR experience by [Arturo Paracuellos](arturitu) in collaboration with Mozilla.
* [VR Link traversal](https://blog.mozvr.com/connecting-virtual-worlds-hyperlinks-in-webvr/)
* [Etherworld Voxel.js based multi-user VR creation tool](https://github.com/EtherWorld/EtherWorld/)


