import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="post/postFullHost/index" />
      <Stack.Screen name="post/postFullGuest/index" />
    </Stack>
  );
}
