export default ({ config }) => ({
  ...config,
  name: 'Storybook Tutorial Template',
  slug: 'storybook-tutorial-template',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  scheme: 'vamost',
  web: {
    bundler: 'metro',
  },
  plugins: ['expo-router'],
  expo: {
    scheme: 'vamost',
    extra: {
      eas: {
        // projectId: '67ccfb62-b63f-4f49-bfd9-9167440ad498',
      },
    },
    updates: {
      url: 'https://u.expo.dev/67ccfb62-b63f-4f49-bfd9-9167440ad498',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
});
