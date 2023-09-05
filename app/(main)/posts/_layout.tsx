import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="profile/index"
    >
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="post/postFullHost/index" />
      <Stack.Screen name="post/postFullGuest/index" />
    </Stack>
  );
}
