import React from 'react';

import Button from '../../../src/atoms/Button/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
  }
}

const Template = (args) => <Button {...args} />;

export const FullWidthContainer = Template.bind({});
FullWidthContainer.args = {
  type: 'primary',
  label: 'Button Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  label: 'Button Label',
  disable: true
};

export const Standard = Template.bind({});
Standard.args = {
  type: 'primary',
  label: 'Button Label'
};

export const StandardWithIcon = Template.bind({});
StandardWithIcon.args = {
  type: 'primary',
  label: 'Button Label',
  iconProps: {name: 'add', stroke: 'gray-100', size:'small'}
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'primary',
  label: 'Button Label',
  iconProps: {name: 'trash', stroke: 'red', size:'small', fill:'red'},
  danger: true
};