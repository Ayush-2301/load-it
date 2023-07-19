import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { FillBoxLoader } from "../src";
import { DefaultWithoutSecondary } from "../src/utils/types";

const meta: Meta = {
  title: "Fill Box Loader",
  component: FillBoxLoader,
};

export default meta;

const Template: StoryFn<DefaultWithoutSecondary> = (args) => (
  <FillBoxLoader {...args} />
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
