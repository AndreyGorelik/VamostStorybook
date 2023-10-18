import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Upcoming, Past, Canceled } from '@screens/user/posts';
import useTheme from '@shared/hooks/useTheme.hook';

const Tab = createMaterialTopTabNavigator();

export default function Layout() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
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
        lazy: true,
      }}
    >
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Past" component={Past} />
      <Tab.Screen name="Cancelled" component={Canceled} />
    </Tab.Navigator>
  );
}
