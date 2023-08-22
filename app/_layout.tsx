import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '../src/store';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'NunitoSans10pt-Regular': require('../src/assets/fonts/NunitoSans_10pt-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack />
      </View>
    </Provider>
  );
}
