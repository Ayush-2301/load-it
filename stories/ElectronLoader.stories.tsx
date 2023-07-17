import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { ElectronLoader } from "../src";
import { DefaultProps } from "../src/utils/types";

const meta: Meta = {
  title: "Electron Loader",
  component: ElectronLoader,
};

export default meta;

const Template: StoryFn<DefaultProps> = (args) => <ElectronLoader {...args} />;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  speedMultiplier: 5,
  primary: "rgb(51,255,255)",
  secondary: "#99007F",
  size: "20",
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
