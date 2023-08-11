import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/auth/register">Register</Link>
        <Link href="/auth/login">Login</Link>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
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
