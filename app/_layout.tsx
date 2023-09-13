import { AppWrapper } from '@shared/ui/appWrapper';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
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
        <AppWrapper onLayoutRootView={onLayoutRootView} />
      </PersistGate>
    </Provider>
  );
}
