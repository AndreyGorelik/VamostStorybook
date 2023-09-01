import { PropsWithChildren } from 'react';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { ANIMATION_DAMPING_RATIO, ANIMATION_DURATION } from './contentWrapper.data';
import { ContentWrapperProps } from './contentWrapper.types';

export default function ContentWrapper({
  height,
  headerStyle,
  children,
  maxHeight,
}: PropsWithChildren<ContentWrapperProps>) {
  const rBottomSheetContent = useAnimatedStyle(() => {
    if (height.value === 0) return {};
    const maxHeightLayout = maxHeight - (headerStyle === 'image' ? 200 : 90) - 50;

    return {
      height: withSpring(height.value > maxHeightLayout ? maxHeightLayout : height.value, {
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
