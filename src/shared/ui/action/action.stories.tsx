import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import useTheme from '@shared/hooks/useTheme.hook';

import Action from './action.component';

export default {
  title: 'Action',
  component: Action,
};

const Template = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}
    >
      <Action
        Icon={<MaterialIcons size={26} name="share" color={theme.colors.secondary} />}
        title="Share"
        onPress={() => {
        }}
      />
      <Action
        Icon={<AntDesign size={26} name="heart" color={theme.colors.secondary} />}
        title="Favorite"
        onPress={() => {
        }}
      />
      <Action
        Icon={<Ionicons name="chatbubble-ellipses" size={24} color={theme.colors.secondary} />}
        title="Chat"
        onPress={() => {
        }}
      />
      <Action
        Icon={<MaterialIcons name="business-center" size={24} color={theme.colors.secondary} />}
        title="Request"
        onPress={() => {
        }}
      />
    </View>
  );
};

export const Default = Template.bind({});
