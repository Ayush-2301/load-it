import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Skeleton, SkeletonTheme } from "../src/Skeleton-Loader";

import colorConfig from "../src/utils/colors";

describe("skeleton Loader test", () => {
  it("should render just the children loading prop is false the Skeleton loader", () => {
    const { container } = render(
      <Skeleton loading={false}>
        <div>this is a children</div>
      </Skeleton>
    );
    expect(container).toHaveTextContent("this is a children");
  });
  it("should render the Skeleton loader when loading prop is true", () => {
    const { container } = render(
      <Skeleton loading={true}>
        <div>this is a children</div>
      </Skeleton>
    );
    expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
  });
  it("should render loading skeleton styles", () => {
    const { container } = render(
      <Skeleton width="200px" height="100em" loading={true}>
        <div>Child 1</div>
      </Skeleton>
    );

    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement?.style.getPropertyValue("--width")).toBe("200px");
    expect(skeletonElement?.style.getPropertyValue("--height")).toBe("100em");
  });

  it("should render loading skeleton with custom styles", () => {
    const customStyles = {
      width: "200px",
      height: "100px",
      backgroundColor: "blue",
      borderRadius: "8px",
    };

    const { container } = render(
      <Skeleton loading={true} cssOverride={customStyles}>
        <div>Child 1</div>
      </Skeleton>
    );

    const skeletonElement = container.querySelector(".skeleton-loader");
    expect(skeletonElement).toBeInTheDocument();

    const computedStyles = window.getComputedStyle(skeletonElement!);
    expect(computedStyles.width).toBe("200px");
    expect(computedStyles.height).toBe("100px");
    expect(computedStyles.backgroundColor).toBe("blue");
    expect(computedStyles.borderRadius).toBe("8px");
  });
  it("should check the borderRadius loading skeleton ", () => {
    const { container } = render(
      <Skeleton circle loading={true}>
        <div>Child 1</div>
      </Skeleton>
    );

    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement?.style.getPropertyValue("--borderRadius")).toBe(
      "50%"
    );
  });
  it("uses a custom className", () => {
    const { container } = render(
      <Skeleton className="test-class">
        <div>children</div>
      </Skeleton>
    );
    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement).toHaveClass("skeleton-loader");
    expect(skeletonElement).toHaveClass("test-class");
  });
  it("styles the skeleton", () => {
    const { container } = render(
      <SkeletonTheme borderRadius="1rem" primary="#67381d">
        <Skeleton>children</Skeleton>
      </SkeletonTheme>
    );
    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement?.style.getPropertyValue("--borderRadius")).toBe(
      "1rem"
    );
    expect(skeletonElement?.style.getPropertyValue("--primary")).toBe(
      colorConfig("#67381d")
    );
  });
  it(" should not override styles of the skeleton", () => {
    const { container } = render(
      <SkeletonTheme borderRadius="1rem" primary="#67381d">
        <Skeleton borderRadius={"2rem"}>children</Skeleton>
      </SkeletonTheme>
    );
    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement?.style.getPropertyValue("--borderRadius")).toBe(
      "2rem"
    );
    expect(skeletonElement?.style.getPropertyValue("--primary")).toBe(
      colorConfig("#67381d")
    );
  });
  it(" should check the custom style of both", () => {
    const { container } = render(
      <SkeletonTheme className="w-40">
        <Skeleton className="h-10">children</Skeleton>
      </SkeletonTheme>
    );
    const skeletonElement: HTMLElement | null = container.querySelector(
      "span.skeleton-loader"
    );
    expect(skeletonElement).toHaveClass("skeleton-loader");
    expect(skeletonElement).toHaveClass("h-10 w-40");
  });
});
