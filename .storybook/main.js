module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  managerHead: (head, { configType }) => {
    if (configType === 'PRODUCTION') {
      return `
      ${head}
      <base href="/storybook/">
      `;
    }
  },
};
