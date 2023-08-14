export default ({ config }) => ({
  ...config,
  name: 'vamost',
  slug: 'vamost',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  scheme: 'vamost',
  web: {
    bundler: 'metro',
  },
  plugins: ['expo-router'],
  expo: {
    owner: 'zbsprod',
    scheme: 'vamost',
    extra: {
      eas: {
        projectId: '6e5848a3-5310-4771-a7a3-080a97b247c8',
      },
    },
    updates: {
      url: 'https://u.expo.dev/6e5848a3-5310-4771-a7a3-080a97b247c8',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
});
