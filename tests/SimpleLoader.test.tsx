import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as SimpleLoaders from "../src/Simple-Loader";
import {
  DefaultProps,
  DefaultWithoutPrimary,
  DefaultWithoutSecondary,
} from "../src/utils/types";

Object.entries(SimpleLoaders).forEach((loader) => {
  const name = loader[0];

  const Loader = loader[1] as React.ComponentType<
    DefaultProps & DefaultWithoutPrimary & DefaultWithoutSecondary
  >;

  describe(name, () => {
    it("should render nothing is loading prop is false", () => {
      const { container } = render(<Loader loading={false} />);
      expect(container.firstChild).toBeNull();
    });

    it("should have allow style override on wrapper", () => {
      const style = { color: "red" };
      const { container } = render(<Loader cssOverride={style} />);
      expect(container.firstChild).toHaveStyle(style);
    });
  });
});
