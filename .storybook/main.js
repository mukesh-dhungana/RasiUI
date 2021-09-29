const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
const CSS_PATH = path.join(__dirname, '../scss');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/preset-scss",
    "@storybook/addon-postcss",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:c| le | sc)ss$/,
      include: path.resolve(__dirname, CSS_PATH),
      use: [
        'style-loader', 'css-loader', 'sass-loader'
      ],
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    return config;
  },
}