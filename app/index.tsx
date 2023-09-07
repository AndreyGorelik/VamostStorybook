import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { Redirect, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { refresh } from 'src/store/slices/authSlice';
export { ErrorBoundary } from 'expo-router';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function Index() {
  const rootNavigationState = useRootNavigationState();
  const { isAuth, isLoading } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rootNavigationState?.key) dispatch(refresh());
  }, [dispatch, rootNavigationState?.key]);

  if (!rootNavigationState?.key) return null;

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} color={'black'} />
      </View>
    );
  }

  if (isAuth === false) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/home" />;
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
