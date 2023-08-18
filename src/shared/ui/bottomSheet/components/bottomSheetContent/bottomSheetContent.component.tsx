import { PropsWithChildren } from 'react';
import { Dimensions } from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';

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

  return (
    <Animated.View
      entering={entering}
      exiting={exiting}
      onLayout={(e) => {
        setHeight(e.nativeEvent.layout.height);
      }}
    >
      {children}
    </Animated.View>
  );
}
