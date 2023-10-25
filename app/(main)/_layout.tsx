import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import useTheme from '@shared/hooks/useTheme.hook';
import { CustomDrawerContent } from '@shared/ui/customDrawerContent';
import { Header } from '@shared/ui/header';
import { Drawer } from 'expo-router/drawer';
import { Pressable } from 'react-native';

export enum MainScreens {
  HOME = 'Home',
  USER = 'My posts',
  ACCOUNT = 'My account',
}

export const MainScreensPaths: Record<MainScreens, string> = {
  [MainScreens.HOME]: 'home/index',
  [MainScreens.USER]: 'user/posts',
  [MainScreens.ACCOUNT]: 'user/account',
};

export default function Layout() {
  const theme = useTheme();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: theme.colors.drawerActive,
        drawerInactiveTintColor: theme.colors.drawerInactive,
        drawerType: 'slide',
        header: () => (
          <Header
            headerLeft={<DrawerToggleButton tintColor={theme.colors.primary} />}
            headerRight={
              <Pressable>
                <Ionicons name="md-notifications-outline" size={24} color={theme.colors.primary} />
              </Pressable>
            }
          />
        ),
      }}
    >
      <Drawer.Screen
        name={MainScreensPaths['Home']}
        options={{
          drawerLabel: MainScreens.HOME,
        }}
      />
      <Drawer.Screen
        name={MainScreensPaths['My posts']}
        options={{
          drawerLabel: MainScreens.USER,
        }}
      />
    </Drawer>
  );
}
