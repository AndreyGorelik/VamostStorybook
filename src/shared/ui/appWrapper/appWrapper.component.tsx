import { useAppSelector } from '@shared/hooks/redux.hook';
import { Stack, useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { AppWrapperProps } from './appWrapper.types';

export default function AppWrapper({ onLayoutRootView }: AppWrapperProps) {
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.authSlice);

  function useProtectedRoute(isAuth: boolean) {
    const segments = useSegments();
    const rootNavigationState = useRootNavigationState();

    useEffect(() => {
      const inAuthGroup = segments[0] === '(auth)';

      if (!isAuth && !inAuthGroup && segments.length) {
        router.replace('/login');
      } else if (isAuth && inAuthGroup) {
        router.push('/home');
      }
    }, [isAuth, rootNavigationState.index, rootNavigationState.key, segments]);
  }

  useProtectedRoute(isAuth);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}
      onLayout={onLayoutRootView}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="account/index" options={{ animation: 'slide_from_left' }} />
        <Stack.Screen name="(main)" options={{ animation: 'fade' }} />
      </Stack>
    </SafeAreaView>
  );
}
