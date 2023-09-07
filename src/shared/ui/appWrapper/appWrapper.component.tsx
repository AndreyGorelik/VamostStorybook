import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { Stack, useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { AppWrapperProps } from './appWrapper.types';
import { setStep } from 'src/store/slices/authSlice';

export default function AppWrapper({ onLayoutRootView }: AppWrapperProps) {
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();

  function checkUserField(user) {
    const neccessaryFields = [
      'email',
      'nickname',
      'birthdate',
      'gender',
      'orientation',
      'showMe',
      'images',
    ];
    let finished = false;

    let step = neccessaryFields.findIndex((item) => item in user) + 3;
    console.log(step, finished);

    return { step, finished };
  }
  function useProtectedRoute(isAuth: boolean) {
    useEffect(() => {
      const inAuthGroup = segments[0] === '(auth)';
      console.log(inAuthGroup, isAuth, segments);
      const { step, finished } = checkUserField(user);
      
      if (!segments.length) return;

      if (!isAuth) {
        router.replace('/login');
        return;
      } 
      
      if (isAuth && !finished) {
        console.log('2');
        test(step);
        return;
      }
       router.push('/home');
      
    }, [isAuth]);
  }
  useProtectedRoute(isAuth);

  function test(step) {
    dispatch(setStep(step));
    router.replace('/register');
  }

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
