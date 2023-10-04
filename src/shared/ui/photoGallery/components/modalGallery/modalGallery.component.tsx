import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { FlatList, Modal, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GalleryImage from '../galleryImage/galleryImage.component';

import { createStyles } from './modalGallery.styles';
import { ModalGalleryProps } from './modalGallery.types';

function ModalGallery({ close, images }: ModalGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal animationType="fade">
      <GestureHandlerRootView style={styles.flex}>
        <SafeAreaView style={styles.flex}>
          <View style={{ backgroundColor: theme.colors.primary }}>
            <TouchableOpacity style={styles.closeBtn} onPress={close}>
              <MaterialIcons name="close" size={24} color={theme.colors.secondary} />
            </TouchableOpacity>
            <FlatList
              data={images}
              renderItem={({ item }) => <GalleryImage image={item} />}
              horizontal
              pagingEnabled
              bounces={false}
              scrollEventThrottle={32}
              keyExtractor={(item) => item._id}
            />
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Modal>
  );
}

export default ModalGallery;
