import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PostFullGuest } from '@screens/post/postFullGuest';
import { PostFullHost } from '@screens/post/postFullHost';
import useTheme from '@shared/hooks/useTheme.hook';

const Tab = createMaterialTopTabNavigator();

export default function Layout() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.drawerInactive,
        tabBarIndicatorStyle: {
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.primary,
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Tab.Screen name="Home" component={PostFullHost} />
      <Tab.Screen name="Settings" component={PostFullGuest} />
    </Tab.Navigator>
  );
}
