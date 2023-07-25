# Load-It: React Loading States Library

Load-It is a lightweight and easy-to-use React library designed to handle loading states in your web applications. With Load-It, you can seamlessly manage loading animations and skeleton loaders to enhance user experience during data fetching and content loading.

## Features

The Load-It library currently offers the following features:

**Simple Loader:** Display a straightforward loading spinner to indicate ongoing background tasks or data loading processes.

**Skeleton Loader:** Implement skeleton loaders to create an elegant and subtle loading effect for components and content placeholders.

## Installation

To use Load-It in your React project, simply install it via npm:

```node
npm i @ayush-2002/load-it
```

## Usage

**Simple Loader**

Each Loader component provides a straightforward loading spinner that you can easily integrate into your React components. When loading is set to true, the spinner will be displayed, indicating ongoing background tasks or data loading processes.

```node
import React, { useState, useEffect } from "react";
import { CircleInLoader } from "@ayush-2002/load-it";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the loading state to false after 2 seconds
  }, []);

  return (
    <div>
      {/* Your component content */}
      <CircleInLoader loading={isLoading} />
    </div>
  );
};

export default MyComponent;
```

## Props for Simple Loader Components

Most loader components have default props for seamless integration. Here are the common default props shared among several loaders:

- `loading` (boolean, default: `true`): Controls the visibility of the loader.
- `size` (string, default: `'48px'`): Specifies the width and height of the loader.
- `primary` (string, default: `'#B5B5B5'`): Sets the primary color of the loader.
- `secondary` (string, default: `'#ff3d00'`): Sets the secondary color of the loader.
- `speedMultiplier` (number, default: `1`): Adjusts the animation speed of the loader.
- `cssOverride` (CSSProperties object, default: `{}`): Provides the ability to apply custom CSS styles to the loader.

### `primary` and `secondary` props

`primary` and `secondary` color props accept a string value in the formats '#xxx', '#xxxxxx', 'rgb(r, g, b)', or 'rgba(r, g, b, a)'

### `size` Prop

It accepts a string value representing the size, which can be specified in various units such as pixels (px) or percentages (%).

**Example**: `size="64px"`

If no unit is provided with the size value, it is assumed to be in pixels by default. So, if you provide a numeric value without a unit, like `size="64"`, it will be treated as `size="64px"`.

### `speedMultiplier` prop

It accepts a numeric value that serves as a multiplier for the default animation duration.

**Example**: If `speedMultiplier={2}`, the loader's animation will be twice as fast as the default speed.

### `cssOverride` prop

The `cssOverride` prop allows you to customize the styles of the loader by passing a CSSProperties object. You can use this prop to override any specific styles and apply your own customizations to the loader.

```node
const customStyles = {
  color: "blue",
  border: "2px solid red",
};

<CircleInLoader cssOverride={customStyles} />;
```

### `ProgressBarLoader` Component

The ProgressBarLoader component in Load-It is designed to display a progress bar while tracking the progress of a given Promise.

| Prop             | Type          | Description                                                                                                                                                                                    | Default Value |
| ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `promise`        | Promise<any>  | (required) The Promise to track the progress of. The progress bar will update as the Promise progresses, and the component will show the success or error message based on the Promise result. | -             |
| `primary`        | string        | (optional) The color of the progress bar. Can be specified as a string in the format "#xxx", "#xxxxxx", "rgb", or "rgba".                                                                      | "#B5B5B5"     |
| `secondary`      | string        | (optional) The color of the progress bar's background. Can be specified as a string in the format "#xxx", "#xxxxxx", "rgb", or "rgba".                                                         | "#ff3d00"     |
| `width`          | string        | (optional) The width of the progress bar. Can be specified as a string with or without units (e.g., "100%" or "200px").                                                                        | "100%"        |
| `height`         | string        | (optional) The height of the progress bar. Can be specified as a string with or without units (e.g., "25px" or "50%").                                                                         | "25px"        |
| `percentage`     | boolean       | (optional) A boolean flag indicating whether to show the progress percentage on the progress bar.                                                                                              | true          |
| `successMessage` | string        | (optional) The message to display when the Promise resolves successfully.                                                                                                                      | ""            |
| `errorMessage`   | string        | (optional) The message to display when the Promise encounters an error.                                                                                                                        | "Error"       |
| `messageCSS`     | CSSProperties | (optional) Additional CSS styles to apply to the message displayed on the progress bar.                                                                                                        | {}            |
| `cssOverride`    | CSSProperties | (optional) Additional CSS styles to override the default styles of the progress bar.                                                                                                           | {}            |

### Usage

```node
import React from "react";
import { ProgressBarLoader } from "@ayush-2002/load-it";

const MyComponent = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <ProgressBarLoader
          promise={fetchData()}
          width="80%"
          height="20px"
          percentage={true}
          successMessage="Data loaded successfully!"
          errorMessage="Failed to fetch data."
          messageCSS={{ fontSize: "12px", color: "green" }}
          cssOverride={{ borderRadius: "8px" }}
        />
      ) : data ? (
        <div>{data.title}</div>
      ) : null}
    </div>
  );
};

export default MyComponent;
```

### List of all the Loaders:

| Loader                | Requires Secondary Prop? |
| --------------------- | ------------------------ |
| BarLoader             | Yes                      |
| BufferingLoader       | No                       |
| CircleInLoader        | Yes                      |
| CircleLoader          | Yes                      |
| CirclePulseLoader     | No                       |
| DoubleDotLoader       | Yes                      |
| DualBoxCrossLoader    | Yes                      |
| DualBoxRotationLoader | Yes                      |
| DualRingLoader        | Yes                      |
| ElectronLoader        | Yes                      |
| FillBoxLoader         | No                       |
| FlipLoader            | No                       |
| FlippingDiamondLoader | No                       |
| GridLoader            | No                       |
| LinearQueueLoader     | No                       |
| LocationLoader        | No                       |
| MergeSplitLoader      | Yes                      |
| MultiCircleLoader     | Yes                      |
| RingLoader            | No                       |
| ScaleLoader           | No                       |
| SearchLoader          | No                       |
| SpinBoxLoader         | No                       |
| TimerLoader           | Yes                      |
| TriDotCircleLoader    | Yes                      |
| TripleBoxLoader       | Yes                      |
| TriPulseLoader        | Yes                      |
| TwoDotsCircleLoader   | Yes                      |
| UmbrellaLoader        | Yes                      |
| UmbrellaPulseLoader   | No                       |

Some loaders use a single primary color for their animations.

## Acknowledgment

The styles for the Simple Loaders used in this library are inspired by the amazing work of [Vineeth TRV](https://codepen.io/vineethtrv/pen/NWxZqMM) on CodePen.
