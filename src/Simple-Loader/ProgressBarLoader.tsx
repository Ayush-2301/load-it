import React, { ReactNode, useEffect, useState } from "react";
import { trackPromiseProgress } from "../utils/progress";
import { LoadingBarProps } from "../utils/types";
import colorConfig from "../utils/colors";
import hasUnit from "../utils/hasUnit";

const ProgressBarLoader = ({
  promise,
  primary = "#B5B5B5",
  secondary = "#ff3d00",
  width = "100%",
  height = "25px",
  percentage = true,
  successMessage = "",
  errorMessage = "Error",
  messageCSS = {},
  cssOverride = {},
}: LoadingBarProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState<string | ReactNode>("");
  const [loaderMessage, setLoaderMessage] = useState<string | ReactNode>("");
  useEffect(() => {
    const updateCallback = (currentProgress: number) => {
      setProgress(currentProgress);
    };

    const trackProgress = async () => {
      setLoading(true);
      try {
        await trackPromiseProgress(promise, updateCallback);
        if (successMessage !== "") setMessage(successMessage);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Promise error:", error);
        if (errorMessage !== "") setMessage(errorMessage);
      }
    };

    trackProgress();
  }, [promise]);
  const progressPercentage = `${Math.round(progress)}%`;
  useEffect(() => {
    if (percentage) {
      setLoaderMessage(
        (prevState) =>
          (prevState =
            progressPercentage.match("100%") || progressPercentage.match("99%")
              ? message
              : progressPercentage)
      );
    } else {
      setLoaderMessage(message);
    }
  }, [progress]);
  if (width === "") {
    width = "100%";
  }
  if (height === "") {
    height = "20px";
  }
  if (!hasUnit(width)) {
    width = `${width}px`;
  }
  if (!hasUnit(height)) {
    height = `${height}px`;
  }
  const loaderStyle = {
    "--width": width,
    "--height": height,
    "--primary": colorConfig(primary),
    "--secondary": colorConfig(secondary),
    ...cssOverride,
  };

  return (
    <>
      {loading && (
        <div className="loading-bar-container" style={loaderStyle}>
          <div
            className="loading-bar-progress"
            style={{ width: `${progress}%` }}
          />
          <div style={messageCSS} className="loader-message">
            {loaderMessage}
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBarLoader;
