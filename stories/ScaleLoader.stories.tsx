import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { ScaleLoader } from "../src";
import { DefaultWithoutSecondary } from "../src/utils/types";

const meta: Meta = {
  title: "Scale Loader",
  component: ScaleLoader,
};

export default meta;

const Template: StoryFn<DefaultWithoutSecondary> = (args) => (
  <ScaleLoader {...args} />
);

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  primary: "#99007F",
  size: "20",
  speedMultiplier: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
