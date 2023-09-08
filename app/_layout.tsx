import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'src/store';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'NunitoSans10pt-Regular': require('src/assets/fonts/NunitoSans_10pt-Regular.ttf'),
    'NunitoSans10pt-Bold': require('src/assets/fonts/NunitoSans_10pt-Bold.ttf'),
    'NunitoSans10pt-SemiBold': require('src/assets/fonts/NunitoSans_10pt-SemiBold.ttf'),
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
      <PersistGate persistor={persistor}>
        <SafeAreaView
          style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}
          onLayout={onLayoutRootView}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="account/index" options={{ animation: 'slide_from_left' }} />
          </Stack>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
