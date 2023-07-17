import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { CircleInLoader } from "../src";
import { DefaultProps } from "../src/utils/types";

const meta: Meta = {
  title: "Circle In Loader",
  component: CircleInLoader,
};

export default meta;

const Template: StoryFn<DefaultProps> = (args) => <CircleInLoader {...args} />;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  speedMultiplier: 5,
  primary: "rgba(23,90,56,0.4)",
  secondary: "#647",
  size: "20",
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
