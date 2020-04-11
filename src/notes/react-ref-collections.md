---
layout: post.njk
title: Creating a collection of refs using React - Casey Yee
---

# Creating a collection of refs

Say you wanted to create a dynamic list of elements, and say you needed access to the DOM node to imperatively alter each one.

To do this, you would need to create a collection of refs. Seems easy enough, and there are several approaches that you might try, but this seems like the only one that seems to work properly.

```js
const MyComponent = () => {
  // Create an array on component instance with useRef. Normal arrays dont work here.
  const refs = useRef([]);

  const useEffect(()=> {
    // you can now iterate through your collection
    elements.map(element => {
      // do something!
    })
  },[])

  const createElements = () => {
    let elements = [];
    for (let index = 0; index < 10; index++) {
      elements.push(
        <div
          key={`child-${i}`}
          // Push the ref onto the refs array.
          ref={(ref) => refs.current.push(ref)}>
          Box {i}
        </div>
      );
    }
    return elements;
  };
  return <div>{createElements()}</div>;
};
```

## Example use of pattern

And with that. Here's a real world application of this pattern that visualizes your mic audio input.

<iframe
  src="https://codesandbox.io/embed/sound-meter-omvfl?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="sound-meter"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Refs for SPEED

We're drawing a bunch of `<div>` elements that we want to transform based on audio input. Because we're updating these elements repeatedly in a tight loop several times a second, using state or modifying properties causes signficant overhead due to the component re-rendering at a high rate. To avoid this, running these transforms in our own loop directly on the DOM elements offers a quick by-pass around react.

## Credit

- After a bunch of hair-pulling, I found [this dev.to post](https://dev.to/ajsharp/-an-array-of-react-refs-pnf) with the hints I needed to make this work.
