import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { FlippingDiamondLoader } from "../src";
import { DefaultWithoutSecondary } from "../src/utils/types";

const meta: Meta = {
  title: "Flipping Diamond Loader",
  component: FlippingDiamondLoader,
};

export default meta;

const Template: StoryFn<DefaultWithoutSecondary> = (args) => (
  <FlippingDiamondLoader {...args} />
);

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  loading: true,
  primary: "rgb(51,255,255)",
  size: "20",
  speedMultiplier: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
};
