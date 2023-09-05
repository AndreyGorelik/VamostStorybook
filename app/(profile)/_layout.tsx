import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { Header } from '@shared/ui/header';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';

export default function ProfileLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        header: () => (
          <Header
            headerLeft={
              <Pressable onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={theme.colors.button} />
              </Pressable>
            }
          />
        ),
        animation: 'none',
      }}
    >
      <Stack.Screen name="profilesList/index" />
      <Stack.Screen name="profileFull/index" />
    </Stack>
  );
}
