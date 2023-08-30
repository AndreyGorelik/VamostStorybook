export default ({ config }) => ({
  ...config,
  name: 'vamoose',
  slug: 'vamoose',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  scheme: 'vamoose',
  web: {
    bundler: 'metro',
  },
  plugins: ['expo-router'],
  expo: {
    owner: 'zbsprod',
    scheme: 'vamoose',
    experiments: {
      tsconfigPaths: true,
    },
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
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.',
        },
      ],
    ],
  },
});
