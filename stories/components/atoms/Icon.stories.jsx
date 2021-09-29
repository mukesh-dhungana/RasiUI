import React from 'react';
import {
  withKnobs,
  select,
  radios,
  text,
} from '@storybook/addon-knobs';
import Icon from '../../../src/atoms/Icon/Icon';

const colors = {
    primary: 'primary',
    'primary-75': 'primary-75',
    'primary-50': 'primary-50',
    'primary-25': 'primary-25',
    'primary-10': 'primary-10',
    'primary-5': 'primary-5',
    secondary: 'secondary',
    'secondary-75': 'secondary-75',
    'secondary-50': 'secondary-50',
    'secondary-25': 'secondary-25',
    'secondary-10': 'secondary-10',
    'secondary-5': 'secondary-5',
    tertiary: 'tertiary',
    'tertiary-75': 'tertiary-75',
    'tertiary-50': 'tertiary-50',
    'tertiary-25': 'tertiary-25',
    'tertiary-10': 'tertiary-10',
    'tertiary-5': 'tertiary-5',
    quaternary: 'quaternary',
    'quaternary-75': 'quaternary-75',
    'quaternary-50': 'quaternary-50',
    'quaternary-25': 'quaternary-25',
    'quaternary-10': 'quaternary-10',
    'quaternary-5': 'quaternary-5',
    green: 'green',
    'green-75': 'green-75',
    'green-50': 'green-50',
    'green-25': 'green-25',
    'green-10': 'green-10',
    'green-5': 'green-5',
    red: 'red',
    'red-75': 'red-75',
    'red-50': 'red-50',
    'red-25': 'red-25',
    'red-10': 'red-10',
    'red-5': 'red-5',
    'gray-100': 'gray-100',
    'gray-200': 'gray-200',
    'gray-300': 'gray-300',
    'gray-400': 'gray-400',
  };
  
  const icons = {
    ap: 'ap',
    payroll: 'payroll',
    inventory: 'inventory',
    sales: 'sales',
    reportcenter: 'reportcenter',
    educationandtraining: 'educationandtraining',
    alerts: 'alerts',
    advanced: 'advanced',
    purchasing: 'purchasing',
    shipments: 'shipments',
    add: 'add'
  };

  const sizes = {
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const isActive = {
    active: 'icon-active',
    inactive: '',
  };

  export default {
    title: 'Atoms/Icon',
    component: Icon,
    decorators: [withKnobs],
  };

  export const Default = () => {
    const IconInstance = () => (
      <Icon
        name={select('Icon Name', icons, 'ap')}
        stroke={select('Color', colors, 'primary')}
        size={radios('Size', sizes, 'tiny')}
        className={radios('Active', isActive, '')}
        altSrc={text('Alt source (overrides source of the icon if given)', '')}
      />
    );
  
    return (
      <>
      <span>Icon next to body text</span>
      <IconInstance />
      <br />
      <br />
      <h2 style={{ display: 'inline' }}>Icon next to h2</h2>
      <IconInstance />
      <br />
      <br />
      <h3 style={{ display: 'inline' }}>Icon next to h3</h3>
      <IconInstance />
      <br />
      <br />
      <h4 style={{ display: 'inline' }}>Icon next to h4</h4>
      <IconInstance />
    </>
    );
  };
  