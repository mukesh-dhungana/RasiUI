import React from 'react';

import Menus from '../../../src/constants/Menus';
import SideNav from '../../../src/molecules/SideNav/SideNav';


export default {
  title: 'Molecules/SideNav',
  component: SideNav,
  parameters: {layout: 'none'},
  argTypes: {
  }
}

const Template = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: Menus,
};