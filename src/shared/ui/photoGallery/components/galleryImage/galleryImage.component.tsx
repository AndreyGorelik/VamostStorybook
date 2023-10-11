import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import SmartImage from '../smartImage/smartImage.component';

import { createStyles } from './galleryImage.styles';
import { GalleryImageProps } from './galleryImage.types';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

export default function GalleryImage({
  image,
  deletingPhoto,
  deletePhotoError,
}: GalleryImageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onStart: (event) => {
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -SCREEN_WIDTH / 2 },
        { translateY: -SCREEN_HEIGHT / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: SCREEN_WIDTH / 2 },
        { translateY: SCREEN_HEIGHT / 2 },
      ],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={[animatedImageStyle]}>
        <View>
          {deletingPhoto && (
            <ActivityIndicator
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
              }}
            />
          )}

          {deletePhotoError && (
            <View
              style={[
                styles.errorText,
                {
                  width: SCREEN_WIDTH,
                  height: SCREEN_HEIGHT,
                },
              ]}
            >
              <Text color={theme.colors.secondary}>{deletePhotoError}</Text>
            </View>
          )}

          {!deletingPhoto && !deletePhotoError && (
            <SmartImage
              photo={image}
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
              }}
              contentFit="contain"
            />
          )}
        </View>
      </Animated.View>
    </PinchGestureHandler>
  );
}
