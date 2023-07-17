import React from "react";
import { DefaultProps } from "../utils/types";
import "./style.css";
import colorConfig from "../utils/colors";
import hasUnit from "../utils/hasUnit";
const MultiCircleLoader = ({
  loading = true,
  primary = "#B5B5B5",
  secondary = "#ff3d00",
  size = "48px",
  speedMultiplier = 1,
  cssOverride = {},
}: DefaultProps) => {
  if (!loading) {
    return null;
  }
  if (size === "") {
    size = "48px";
  }
  if (!hasUnit(size)) {
    size = `${size}px`;
  }
  if (!speedMultiplier) {
    speedMultiplier = 1;
  }

  const loaderStyle = {
    "--size": size,
    "--primary": colorConfig(primary),
    "--secondary": colorConfig(secondary),
    "--speedMultiplier": speedMultiplier,
    ...cssOverride,
  };
  return <div className="multicircle-loader" style={loaderStyle}></div>;
};
export default MultiCircleLoader;
