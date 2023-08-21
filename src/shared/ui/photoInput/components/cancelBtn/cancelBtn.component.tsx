import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import { Pressable } from 'react-native';

import { createStyles } from './cancelBtn.styles';
import { CancelBtnProps } from './cancelBtn.types';

export default function CancelBtn({ onDelete }: CancelBtnProps) {
  const styles = createStyles();

  return (
    <Pressable style={styles.wrapper} onPress={onDelete}>
      <MaterialIcons name="cancel" size={24} color="white" />
    </Pressable>
  );
}
