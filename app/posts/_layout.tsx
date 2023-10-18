import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="[id]" />
      <Stack.Screen name="post/host/index" />
      <Stack.Screen name="post/guest/index" />
      <Stack.Screen name="post/not-joined/index" />
    </Stack>
  );
}
