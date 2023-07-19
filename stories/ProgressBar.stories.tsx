import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { ProgressBarLoader } from "../src";
import { LoadingBarProps } from "../src/utils/types";

const apiUrl = "https://jsonplaceholder.typicode.com/post";
const meta: Meta = {
  title: "Progress loader",
  component: ProgressBarLoader,
};

export default meta;

const Template: StoryFn<LoadingBarProps> = (args) => (
  <ProgressBarLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  promise: fetch(apiUrl),
};

export const Custom = Template.bind({});
Custom.args = {
  promise: fetch(apiUrl),
  primary: "#f67131",
  secondary: "rgb(13,255,12)",
  width: "100px",
  height: "30px",
  percentage: true,
  messageCSS: {},
  cssOverride: {},
};
