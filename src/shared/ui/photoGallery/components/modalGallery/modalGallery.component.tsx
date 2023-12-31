import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  View,
  ViewToken,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { deleteUserPhoto } from 'src/store/slices/user.slice';

import GalleryImage from '../galleryImage/galleryImage.component';

import { createStyles } from './modalGallery.styles';
import { ModalGalleryProps } from './modalGallery.types';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HEADER_BUTTONS_SIZE = 24;

function ModalGallery({
  close,
  images,
  imageScaleId,
  deletingPhoto,
  deletePhotoError,
}: ModalGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const safeArea = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [currentImageId, setCurrentImageId] = useState('');

  StatusBar.setBarStyle('light-content');

  const listRef = useRef<FlatList>(null);
  const currentImageIndex = images.findIndex((item) => item._id === currentImageId);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].item._id) {
      setCurrentImageId(viewableItems[0].item._id);
    }
  }).current;

  const deletePhoto = (id: string) => {
    Alert.alert('Are you sure you want to delete the photo?', 'This action cannot be undone', [
      {
        text: 'Cancel',
      },
      { text: 'Delete', onPress: () => dispatch(deleteUserPhoto(id)) },
    ]);
  };

  return (
    <Modal animationType="fade">
      <GestureHandlerRootView style={styles.flex}>
        <View style={{ backgroundColor: theme.colors.primary }}>
          <FlatList
            data={images}
            renderItem={({ item }) => (
              <GalleryImage
                image={item}
                deletingPhoto={deletingPhoto}
                deletePhotoError={deletePhotoError}
              />
            )}
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
            <Pressable
              onPress={close}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <MaterialIcons
                name="arrow-back"
                size={HEADER_BUTTONS_SIZE}
                color={theme.colors.secondary}
              />
            </Pressable>
            <Pressable
              onPress={() => deletePhoto(currentImageId)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <MaterialIcons
                name="delete"
                size={HEADER_BUTTONS_SIZE}
                color={theme.colors.secondary}
              />
            </Pressable>
          </View>
          <View style={[styles.photoCounter, { bottom: safeArea.bottom }]}>
            <Text color={'white'}>{`${currentImageIndex + 1}/${images.length}`}</Text>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}

export default ModalGallery;
