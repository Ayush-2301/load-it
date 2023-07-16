import React from 'react';
import type { Meta,StoryFn } from '@storybook/react';
import {Skeleton} from '../src';
import { SkeletonProps } from '../src/Skeleton-Loader/Skeleton';

const meta:Meta = {
  title: 'Skeleton',
  component: Skeleton,
} 
export default meta;

const Template : StoryFn<SkeletonProps>= (args)=> <Skeleton {...args}/>

export const Primary=Template.bind({});
Primary.args={
  loading:true
}

export const Secondary= Template.bind({})

Secondary.args={
  loading:false
}
