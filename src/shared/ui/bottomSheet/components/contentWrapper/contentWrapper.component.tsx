import { useHeaderHeight } from '@react-navigation/elements';
import { PropsWithChildren } from 'react';
import { Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { ANIMATION_DAMPING_RATIO, ANIMATION_DURATION } from './contentWrapper.data';
import { ContentWrapperProps } from './contentWrapper.types';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ContentWrapper({
  height,
  headerStyle,
  children,
}: PropsWithChildren<ContentWrapperProps>) {
  const headerHeight = useHeaderHeight();
  const rBottomSheetContent = useAnimatedStyle(() => {
    if (height.value === 0) return {};
    const maxHeight =
      SCREEN_HEIGHT - headerHeight * 1.6 - (headerStyle === 'image' ? 200 : 90) - 50;

    return {
      height: withSpring(height.value > maxHeight ? maxHeight : height.value, {
        duration: ANIMATION_DURATION,
        dampingRatio: ANIMATION_DAMPING_RATIO,
      }),
    };
  });

  return (
    <Animated.ScrollView style={[{ overflow: 'hidden' }, rBottomSheetContent]}>
      {children}
    </Animated.ScrollView>
  );
}
