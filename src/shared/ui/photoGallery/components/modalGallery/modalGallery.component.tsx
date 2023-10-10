import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, Modal, Pressable, StatusBar, View, ViewToken } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GalleryImage from '../galleryImage/galleryImage.component';

import { createStyles } from './modalGallery.styles';
import { ModalGalleryProps } from './modalGallery.types';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

function ModalGallery({ close, images, imageScaleId }: ModalGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const safeArea = useSafeAreaInsets();
  const [currentImageId, setCurrentImageId] = useState('');
  StatusBar.setBarStyle('light-content');

  const listRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].item._id) {
      setCurrentImageId(viewableItems[0].item._id);
    }
  }).current;

  const deletePhoto = (id: string) => {
    console.log('delete this', id);
  };

  return (
    <Modal animationType="fade">
      <GestureHandlerRootView style={styles.flex}>
        <View style={{ backgroundColor: theme.colors.primary }}>
          <FlatList
            data={images}
            renderItem={({ item }) => <GalleryImage image={item} />}
            horizontal
            pagingEnabled
            bounces={false}
            scrollEventThrottle={32}
            keyExtractor={(item) => item._id}
            onViewableItemsChanged={viewableItemsChanged}
            initialScrollIndex={imageScaleId}
            ref={listRef}
            getItemLayout={(data, index) => {
              return {
                length: SCREEN_WIDTH,
                offset: SCREEN_WIDTH * index,
                index,
              };
            }}
          />
          <View style={[styles.headerBtns, { top: safeArea.top }]}>
            <Pressable onPress={close}>
              <MaterialIcons name="arrow-back" size={24} color={theme.colors.secondary} />
            </Pressable>
            <Pressable onPress={() => deletePhoto(currentImageId)}>
              <MaterialIcons name="delete" size={24} color={theme.colors.secondary} />
            </Pressable>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}

export default ModalGallery;
