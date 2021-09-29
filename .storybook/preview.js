import '../scss/index.scss';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
 
addDecorator(StoryRouter());
 
addDecorator(withInfo); 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
}