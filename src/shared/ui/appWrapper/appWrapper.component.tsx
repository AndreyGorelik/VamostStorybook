import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { checkUserField } from '@shared/utils/checkUserFields';
import { Stack, useRouter, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { setStep } from 'src/store/slices/authSlice';

import { AppWrapperProps } from './appWrapper.types';

export default function AppWrapper({ onLayoutRootView }: AppWrapperProps) {
  const router = useRouter();

  const { isAuth, signUpFinished } = useAppSelector((state) => state.authSlice);

  const rootNavigationState = useRootNavigationState();
  const user = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  function useProtectedRoute(isAuth: boolean, signUpFinished: boolean) {
    useEffect(() => {
      if (!rootNavigationState || !rootNavigationState.key) return;
      const { step, finished } = checkUserField(user);

      if (signUpFinished || (isAuth && finished)) {
        router.push('/home');
        return;
      }

      if (!isAuth) {
        router.push('/login');
        return;
      }

      if (isAuth && !finished && !signUpFinished) {
        dispatch(setStep(step));
        router.push('/register');
        return;
      }
    }, [isAuth, signUpFinished]);
  }

  useProtectedRoute(isAuth, signUpFinished);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}
      onLayout={onLayoutRootView}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="account/index" options={{ animation: 'slide_from_left' }} />
        <Stack.Screen name="(main)" options={{ animation: 'fade' }} />
        <Stack.Screen name="(auth)" options={{ animation: 'fade' }} />
      </Stack>
    </SafeAreaView>
  );
}
