import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="auth/register/index"
        options={{
          title: 'REGISTER',
        }}
      />
      <Stack.Screen
        name="auth/login/index"
        options={{
          title: 'Cats',
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
