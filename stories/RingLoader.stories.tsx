import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { RingLoader } from "../src";
import { DefaultWithoutPrimary } from "../src/utils/types";

const meta: Meta = {
  title: "Ring Loader",
  component: RingLoader,
};

export default meta;

const Template: StoryFn<DefaultWithoutPrimary> = (args) => (
  <RingLoader {...args} />
);

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  secondary: "#99007F",
  size: "20",
  speedMultiplier: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
