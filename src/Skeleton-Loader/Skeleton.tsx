import React, { CSSProperties, useContext } from "react";
import { SkeletonThemeContext } from "./SkeletonThemeContext";
import "./style.css";
import hasUnit from "../utils/hasUnit";
import colorConfig from "../utils/colors";
import { SkeletonThemeContextType } from "../utils/types";

type CustomCSSProperties = {
  "--width": string;
  "--height": string;
  "--primary": string | null;
  "--secondary": string | null;
  "--borderRadius": string | number;
  "--duration": string;
  "--direction": string;
  "--enableAnimation": string;
};

export interface SkeletonProps extends SkeletonThemeContextType {
  circle?: boolean;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
  cssOverride?: CSSProperties;
}

function getStyles({
  width,
  height,
  borderRadius,
  primary,
  secondary,
  duration,
  direction,
  enableAnimation = true,
  circle,
}: SkeletonThemeContextType & { circle: boolean } & Omit<
    SkeletonThemeContextType,
    "loading"
  >): CSSProperties {
  const propStyle: CustomCSSProperties = {
    "--width": "",
    "--height": "",
    "--primary": null,
    "--secondary": null,
    "--borderRadius": "",
    "--duration": "",
    "--direction": "",
    "--enableAnimation": "",
  };
  if (typeof width === "string" && hasUnit(width)) {
    propStyle["--width"] = width;
  }
  if (width && !hasUnit(width)) {
    width = `${width}px`;
    propStyle["--width"] = width;
  }
  if (typeof height === "string" && hasUnit(height)) {
    propStyle["--height"] = height;
  }
  if (height && !hasUnit(height)) {
    height = `${height}px`;
    propStyle["--height"] = height;
  }
  if (typeof borderRadius === "string" && hasUnit(borderRadius)) {
    propStyle["--borderRadius"] = borderRadius;
  }
  if (typeof borderRadius === "number") {
    borderRadius = `${borderRadius}px`;
    propStyle["--borderRadius"] = borderRadius;
  }
  if (typeof primary !== "undefined") {
    propStyle["--primary"] = colorConfig(primary);
  }
  if (typeof secondary !== "undefined") {
    propStyle["--secondary"] = colorConfig(secondary);
  }
  if (typeof duration !== "undefined") {
    propStyle["--duration"] = `${duration}s`;
  }
  if (direction === "rtl") {
    propStyle["--direction"] = "reverse";
  }
  if (!enableAnimation) {
    propStyle["--enableAnimation"] = "none";
  }
  if (circle) {
    propStyle["--borderRadius"] = "50%";
  }
  return propStyle as CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  loading,
  primary,
  secondary,
  width,
  height,
  borderRadius,
  duration,
  direction,
  enableAnimation,
  circle = false,
  inline = false,
  children,
  cssOverride = {},
  className,
}) => {
  const contextStyle = useContext(SkeletonThemeContext);
  const contextClassName = contextStyle.className;
  const propStyle = {
    width,
    height,
    primary,
    secondary,
    borderRadius,
    duration,
    direction,
    enableAnimation,
    circle,
  };
  for (const [key, value] of Object.entries(propStyle)) {
    if (typeof value === "undefined") {
      delete propStyle[key as keyof typeof propStyle];
    }
  }
  const combineStyle = {
    ...contextStyle,
    ...propStyle,
  };
  const skeletonStyle = {
    ...getStyles(combineStyle),
    ...cssOverride,
  };
  if (typeof loading === "undefined") {
    loading = contextStyle.loading;
  }
  if (
    typeof loading === "undefined" &&
    typeof contextStyle.loading === "undefined"
  ) {
    loading = true;
  }

  let customClassName = "skeleton-loader";
  if (typeof className !== "undefined" && !contextClassName) {
    customClassName += ` ${className}`;
  } else if (typeof contextClassName !== "undefined" && !className) {
    customClassName += ` ${contextClassName}`;
  } else if (
    typeof className !== "undefined" &&
    typeof contextClassName !== "undefined"
  ) {
    customClassName += ` ${contextClassName} ${className}`;
  }
  return loading ? (
    <>
      <SkeletonThemeContext.Consumer>
        {() => (
          <span className={customClassName} style={skeletonStyle}>
            &zwnj;
          </span>
        )}
      </SkeletonThemeContext.Consumer>
      {!inline && <br />}
    </>
  ) : (
    <>{children}</>
  );
};

export default Skeleton;
