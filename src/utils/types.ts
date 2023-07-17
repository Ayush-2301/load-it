import { CSSProperties } from "react";

export  interface DefaultProps {
  loading?: boolean;
  size?: string;
  primary?: string;
  secondary?:string;
  speedMultiplier?: number;
  cssOverride?:CSSProperties;
}
export type DefaultWithoutPrimary = Omit<DefaultProps, "primary">;
export type DefaultWithoutSecondary = Omit<DefaultProps, "secondary">;