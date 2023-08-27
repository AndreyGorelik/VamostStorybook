import { Redirect, useRootNavigationState } from 'expo-router';
import { View } from 'react-native';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function Index() {
  const rootNavigationState = useRootNavigationState();
  if (!rootNavigationState?.key) return null;

  return <Redirect href="/register" />;
}

// eslint-disable-next-line import/no-mutable-exports
let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require('../.storybook').default;
  EntryPoint = () => {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
