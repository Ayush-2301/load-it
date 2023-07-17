import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { MultiCircleLoader } from "../src";
import { DefaultProps } from "../src/utils/types";

const meta: Meta = {
  title: "MultiCirlce Loader",
  component: MultiCircleLoader,
};

export default meta;

const Template: StoryFn<DefaultProps> = (args) => (
  <MultiCircleLoader {...args} />
);

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  primary: "rgb(51,255,255)",
  secondary: "#99007F",
  size: "20",
  speedMultiplier: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
