import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { useAppSelector, useAppDispatch } from '../src/shared/hooks/redux.hook';
import { Button } from '../src/shared/ui/button';
import Text from '../src/shared/ui/text/text.component';
import { loginUser, logoutUser } from '../src/store/slices/settingsSlice';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function Index() {
  const state = useAppSelector((state) => state.settingsSlice);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/auth/register">Register</Link>
        <Link href="/auth/login">Login</Link>
        <Text variant="h2">{state.isAuth ? 'is auth' : 'no auth'}</Text>
        {state.authError ? <Text variant="warning">{state.authError}</Text> : null}
        <Button title="login" onPress={() => dispatch(loginUser())} />
        <Button title="logout" onPress={() => dispatch(logoutUser())} />
      </View>
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
