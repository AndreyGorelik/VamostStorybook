import { TextInput, View, Text } from 'react-native';

import { styles } from '../styles';

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  console.log(1);
  return (
    <View>
      <TextInput style={styles.listItem} value={title} editable={true} />
      <Text style={styles.glowText}>Hello</Text>
    </View>
  );
};
