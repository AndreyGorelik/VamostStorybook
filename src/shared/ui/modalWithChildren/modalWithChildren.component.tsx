import useTheme from '@shared/hooks/useTheme.hook';
import { PropsWithChildren } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { createStyles } from './modalWithChildren.styles';
import { ModalWithChildrenProps } from './modalWithChildren.types';

function ModalWithChildren({
  children,
  visible,
  setVisible,
}: PropsWithChildren<ModalWithChildrenProps>) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Modal transparent={true} visible={visible}>
      <TouchableOpacity style={styles.backdrop} onPress={() => setVisible(false)} activeOpacity={1}>
        <View style={styles.modalCenteredView}>
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.modalContent}>{children}</View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default ModalWithChildren;
