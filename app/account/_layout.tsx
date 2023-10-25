import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { Header } from '@shared/ui/header';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';

export default function AccountLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
      initialRouteName="profile/index"
    >
      <Stack.Screen name="profile/index" />
      <Stack.Screen
        name="requests/index"
        options={{
          headerShown: true,
          animation: 'fade_from_bottom',
          header: () => (
            <Header
              headerLeft={
                <Pressable onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color={theme.colors.button} />
                </Pressable>
              }
            />
          ),
        }}
      />
    </Stack>
  );
}
