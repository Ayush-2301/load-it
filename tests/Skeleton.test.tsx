import React from "react";
import { render } from "@testing-library/react";

import { Skeleton } from "../src";

describe("Skeleton", () => {
  test("render the skeleton component", () => {
    render(<Skeleton />);
  });
});
