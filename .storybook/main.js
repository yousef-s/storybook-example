const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    return {
      ...config,
      // [tsconfig.json] Resolve all path aliases across stories
      plugins: [...config.plugins, tsconfigPaths()],
    };
  },
};
