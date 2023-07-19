import React from "react";
import { DefaultWithoutSecondary } from "../utils/types";
import "./style.css";
import colorConfig, { convertHexToRGB } from "../utils/colors";
import hasUnit from "../utils/hasUnit";
const BufferingLoader = ({
  loading = true,
  primary = "#B5B5B5",
  size = "48px",
  speedMultiplier = 1,
  cssOverride = {},
}: DefaultWithoutSecondary) => {
  if (!loading) {
    return null;
  }
  if (size === "") {
    size = "48px";
  }
  if (!hasUnit(size)) {
    size = `${size}px`;
  }
  if (speedMultiplier === 0) {
    speedMultiplier = 1;
  }

  const loaderStyle = {
    "--size": size,
    "--primary-rgb": convertHexToRGB(colorConfig(primary)),
    "--speedMultiplier": speedMultiplier,
    ...cssOverride,
  };
  return <div className="buffering-loader" style={loaderStyle}></div>;
};
export default BufferingLoader;
