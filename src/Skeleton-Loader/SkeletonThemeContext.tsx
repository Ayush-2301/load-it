import { createContext } from "react";
import { SkeletonThemeContextType } from "../utils/types";

export const SkeletonThemeContext = createContext<
  SkeletonThemeContextType & { className?: string }
>({});
