import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { TimerLoader } from "../src";
import { DefaultProps } from "../src/utils/types";

const meta: Meta = {
  title: "Timer Loader",
  component: TimerLoader,
};

export default meta;

const Template: StoryFn<DefaultProps> = (args) => <TimerLoader {...args} />;

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
