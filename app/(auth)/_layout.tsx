import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '@shared/ui/header';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login/index"
        options={{
          header: () => (
            <Header
              headerLeft={<Link href="/register">Sign up</Link>}
              headerRight={
                <Pressable>
                  <MaterialIcons name="close" size={24} color="black" />
                </Pressable>
              }
            />
          ),
          animation: 'fade_from_bottom',
        }}
      />
    </Stack>
  );
}
