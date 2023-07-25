import { CSSProperties } from "react";

export  interface DefaultProps {
  loading?: boolean;
  size?: string;
  primary?: string;
  secondary?:string;
  speedMultiplier?: number;
  cssOverride?:CSSProperties;
}
export type DefaultWithoutSecondary = Omit<DefaultProps, "secondary">;

export interface LoadingBarProps {
  promise: Promise<any>;
  primary?:string;
  secondary?:string,
  width?:string,
  height?:string,
  successMessage?:string,
  errorMessage?:string,
  messageCSS?:CSSProperties,
  percentage?:boolean,
  cssOverride?:CSSProperties
}
export interface SkeletonThemeContextType {
  loading?: boolean;
  width?: string;
  height?: string;
  primary?: string;
  borderRadius?: string | number;
  secondary?: string;
  duration?: number;
  direction?: "ltr" | "rtl";
  enableAnimation?: boolean;
}