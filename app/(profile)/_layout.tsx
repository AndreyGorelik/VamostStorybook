import { Ionicons } from '@expo/vector-icons';
import { Header } from '@shared/ui/header';
import { Stack, router } from 'expo-router';
import { Pressable } from 'react-native';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="profilesList/index"
        options={{
          header: () => (
            <Header
              headerLeft={
                <Pressable onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
              }
            />
          ),
        }}
      />
    </Stack>
  );
}
