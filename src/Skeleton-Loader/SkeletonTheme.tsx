import React, { PropsWithChildren } from "react";
import { SkeletonThemeContext } from "./SkeletonThemeContext";
import { SkeletonThemeContextType } from "../utils/types";
type SkeletonThemeProps = PropsWithChildren<SkeletonThemeContextType>;

const SkeletonTheme: React.FC<SkeletonThemeProps & { className?: string }> = ({
  children,
  className,
  ...styles
}) => {
  const contextValue = {
    ...styles,
    className,
  };
  return (
    <SkeletonThemeContext.Provider value={contextValue}>
      {children}
    </SkeletonThemeContext.Provider>
  );
};

export default SkeletonTheme;
