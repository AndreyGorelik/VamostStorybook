import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import Action from './action.component';

export default {
  title: 'Action',
  component: Action,
};

const Template = () => {
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
        Icon={<MaterialIcons size={26} name="share" color="white" />}
        title="Share"
        onPress={() => {}}
      />
      <Action
        Icon={<AntDesign size={26} name="heart" color="white" />}
        title="Favorite"
        onPress={() => {}}
      />
      <Action
        Icon={<Ionicons name="chatbubble-ellipses" size={24} color="white" />}
        title="Chat"
        onPress={() => {}}
      />
      <Action
        Icon={<MaterialIcons name="business-center" size={24} color="white" />}
        title="Request"
        onPress={() => {}}
      />
    </View>
  );
};

export const Default = Template.bind({});
