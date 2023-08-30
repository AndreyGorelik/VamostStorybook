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
    scheme: 'vamost',
    owner: 'nicesolutions',
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      eas: {
        projectId: '3b3d0624-1ec0-46e4-b6a2-5348285f1931',
      },
    },
    updates: {
      url: 'https://u.expo.dev/3b3d0624-1ec0-46e4-b6a2-5348285f1931',
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
