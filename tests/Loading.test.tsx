import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../src";

describe("render test", () => {
  test("render the Loading component", () => {
    render(<Loading />);
  });
});
