import { Meta, StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { Skeleton, SkeletonTheme } from "../src";
import { SkeletonProps } from "../src/Skeleton-Loader/Skeleton";

const meta: Meta = {
  title: "Skeleton Loader",
  component: Skeleton,
};

export default meta;

const Template: StoryFn<SkeletonProps> = (...args) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div style={{ width: "20px" }}>
      <Skeleton className="hello">
        <div
          style={{
            border: "1px solid red",
          }}
        >
          hello this is a div
        </div>
      </Skeleton>
    </div>
  );
};

export const Default = Template.bind({});

export const InlineTest: React.FC = () => (
  <SkeletonTheme loading>
    <div style={{ width: 500 }}>
      <Skeleton duration={1} width="300px" inline children={" "} />
      <Skeleton duration={2} width="100px" inline children={" "} />
      <Skeleton duration={3} width="50px" inline children={" "} />
      <Skeleton duration={4} width="20px" inline children={" "} />
    </div>
  </SkeletonTheme>
);

export const SkeletonThemeTest: React.FC = () => {
  return (
    <SkeletonTheme loading primary="#48723d" secondary="#f5613">
      <Skeleton
        height="200px"
        width="200px"
        loading
        primary="rgb(12,35,255,0.1)"
        borderRadius={"50%"}
        direction="rtl"
        duration={1}
        // cssOverride={{
        //   borderRadius: "10px",
        // }}
        // loading={false}
      >
        first
      </Skeleton>

      <Skeleton>second</Skeleton>
    </SkeletonTheme>
  );
};

export const SkeletonWithCustomClassName: React.FC = () => (
  <Skeleton className="my-custom-class">
    This skeleton has a custom className.
  </Skeleton>
);

export const SkeletonWithCustomCSS: React.FC = () => (
  <Skeleton
    cssOverride={{
      width: "300px",
      height: "100px",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
    }}
  >
    This skeleton has custom CSS styles.
  </Skeleton>
);

export const CircleSkeleton: React.FC = () => (
  <Skeleton width="200px" height="200px" circle>
    This skeleton is a circle.
  </Skeleton>
);

export const SkeletonWithLoadingFalse: React.FC = () => (
  <Skeleton loading={false}>
    This skeleton has loading set to false and should not render as a skeleton.
  </Skeleton>
);

export const SkeletonWithCustomWidthAndHeight: React.FC = () => (
  <Skeleton width="100px" height="50px">
    This skeleton has custom width and height.
  </Skeleton>
);
