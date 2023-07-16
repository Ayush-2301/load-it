import React from 'react';
import type { Meta,StoryFn } from '@storybook/react';
import { Loading} from '../src';
import { LoadingProps } from '../src/Simple-Loader/Loading';

const meta:Meta = {
  title: 'Loading',
  component: Loading,
} 
export default meta;

const Template : StoryFn<LoadingProps>= (args)=> <Loading {...args}/>

export const Primary=Template.bind({});
Primary.args={
  loading:true
}

export const Secondary= Template.bind({})

Secondary.args={
  loading:false
}
