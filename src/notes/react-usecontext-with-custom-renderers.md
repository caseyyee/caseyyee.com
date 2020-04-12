---
layout: post.njk
title: How to useContext with custom renderers like react-three-fiber and react-konva - Casey Yee
---

# How to useContext with custom renderers like react-three-fiber and react-konva

Libraries like react-three-fiber and react-konva are fantastic in that they allow React app developers to create 2D and 3D Canvas content while sticking with all that's great about React components. The difference of course, is that rather than manipulating the DOM, they are instead controlling Canvas elements. To achieve this, these libraries implement custom renderers, or reconcilers in React.

For the most part, these libraries work like any other React libraries, but they both suffer from a React issue that doesn't allow the `useContext` hook inside the custom reconcilers:

<iframe
     src="https://codesandbox.io/embed/react-three-fiber-usecontext-issue-i80wx?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-three-fiber useContext issue"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

In the above example, you can see that the `<Test>` component, properly logs out _MyContext_ value.

But when moved to be as a child of `<Canvas>`, which is the react-three-fiber's renderer, we get this lovely error:

![usecontext-error](/img/notes/usecontext-error.png)

## How do you fix this?

You can work around this by avoiding the use of `useContext` altogether and pass the values you need into the children using props. But this isn't a great solution. The other option is to use a _bridge_ context to proxy the values into a new Context that you can consume inside the renderer:

<iframe
     src="https://codesandbox.io/embed/react-three-fiber-usecontext-bridge-p2ftk?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-three-fiber useContext bridge"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

It's not the most elegant, but it does work.

## Additional information

- [See my Spectrum chat question](https://spectrum.chat/react-three-fiber/general/using-usecontext-hook-within-canvas~41e3bc4a-28c2-4318-930c-df8be8d3a014)
