import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch } from '@shared/hooks/redux.hook';
import { Header } from '@shared/ui/header';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { setStep } from 'src/store/slices/authSlice';

export default function AuthLayout() {
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <Stack.Screen
        name="login/index"
        options={{
          header: () => (
            <Header
              headerLeft={
                <Link href="/register" onPress={() => dispatch(setStep(1))}>
                  Sign up
                </Link>
              }
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
