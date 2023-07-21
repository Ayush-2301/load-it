import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<boolean>();
  const [show, setShow] = useState<boolean>();
  const [loaderMessage, setLoaderMessage] = useState<string | React.ReactNode>(
    ""
  );

  useEffect(() => {
    const updateCallback = (currentProgress: number) => {
      setProgress(currentProgress);
    };

    const trackProgress = async () => {
      setLoading(true);
      setShow(true);
      try {
        await trackPromiseProgress(promise, updateCallback);
        setStatus(true);
        setLoading(false);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } catch (error) {
        console.error("Promise error:", error);
        setStatus(false);
        setLoading(false);
      }
    };

    trackProgress();
  }, [promise]);

  useEffect(() => {
    const statusMessage = status ? successMessage : errorMessage;
    if (!loading && percentage) {
      setLoaderMessage(statusMessage);
    } else if (!loading && !percentage) {
      setLoaderMessage(statusMessage);
    } else if (percentage) {
      setLoaderMessage((prevState) => (prevState = `${Math.round(progress)}%`));
    }
  }, [progress, loading, status, successMessage, errorMessage]);

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
      {show && (
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
