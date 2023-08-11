import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../src/store';

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Stack>
          <Stack.Screen
            name="auth/register/index"
            options={{
              title: 'REGISTER',
            }}
          />
          <Stack.Screen
            name="auth/login/index"
            options={{
              title: 'Cats',
              headerLargeTitle: true,
            }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
