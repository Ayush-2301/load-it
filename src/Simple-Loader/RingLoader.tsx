import React from "react";
import { DefaultWithoutPrimary } from "../utils/types";
import "./style.css";
import colorConfig from "../utils/colors";
import hasUnit from "../utils/hasUnit";
const RingLoader = ({
  loading = true,
  secondary = "#ff3d00",
  size = "48px",
  speedMultiplier = 1,
  cssOverride = {},
}: DefaultWithoutPrimary) => {
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
    "--secondary": colorConfig(secondary),
    "--speedMultiplier": speedMultiplier,
    ...cssOverride,
  };
  return <div className="ring-loader" style={loaderStyle}></div>;
};
export default RingLoader;
