import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]" />
      <Stack.Screen
        name="post/host/index"
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="post/guest/index"
        options={{
          animation: 'fade',
        }}
      />
    </Stack>
  );
}
