import { useHeaderHeight } from '@react-navigation/elements';
import Constants from 'expo-constants';
import { PropsWithChildren } from 'react';
import { Dimensions, LayoutChangeEvent } from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BOTTOMSHEET_HEADER_HEIGHT } from '../header/header.styles';
import { BOTTOMSHEET_HEADER_IMAGE_HEIGHT } from '../headerImage/headerImage.styles';

import {
  OPACITY_ENTERTING_ANIMATION_DURATION,
  OPACITY_EXITING_ANIMATION_DURATION,
  ORIGIN_X_ANIMATION_DURATION,
} from './bottomSheetContent.data';
import { BottomSheetContentProps, ExitingAnimationType } from './bottomSheetContent.types';
const { width } = Dimensions.get('window');

export default function BottomSheetContent({
  setHeight,
  children,
  fixed = false,
  imageHeader = false,
}: PropsWithChildren<BottomSheetContentProps>) {
  const exiting = ({ currentOriginX }: ExitingAnimationType) => {
    'worklet';
    const animations = {
      originX: withTiming(-width, { duration: ORIGIN_X_ANIMATION_DURATION }),
      opacity: withTiming(0.0, { duration: OPACITY_EXITING_ANIMATION_DURATION }),
    };
    const initialValues = {
      originX: currentOriginX,
      opacity: 1,
    };
    return {
      initialValues,
      animations,
    };
  };

  const entering = () => {
    'worklet';
    const animations = {
      originX: withTiming(0, { duration: ORIGIN_X_ANIMATION_DURATION }),
      opacity: withTiming(1, { duration: OPACITY_ENTERTING_ANIMATION_DURATION }),
    };
    const initialValues = {
      originX: width,
      opacity: 0,
    };
    return {
      initialValues,
      animations,
    };
  };

  const headerHeight = useHeaderHeight();
  const windowHeight = Dimensions.get('window').height;
  const bottom = useSafeAreaInsets().bottom;
  const top = useSafeAreaInsets().top;

  return (
    <Animated.View
      entering={entering}
      exiting={exiting}
      onLayout={(e: LayoutChangeEvent) => {
        const availableHeight =
          windowHeight -
          headerHeight -
          Constants.statusBarHeight -
          bottom -
          top -
          (imageHeader ? BOTTOMSHEET_HEADER_IMAGE_HEIGHT : BOTTOMSHEET_HEADER_HEIGHT);

        let height = 0;

        if (e.nativeEvent.layout.height > windowHeight || fixed) {
          height = availableHeight;
        } else {
          height = e.nativeEvent.layout.height;
        }

        setHeight?.(height);
      }}
    >
      {children}
    </Animated.View>
  );
}
