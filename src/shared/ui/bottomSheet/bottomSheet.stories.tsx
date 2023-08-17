import { useCallback, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Button } from '../button';

import BottomSheet from './bottomSheet.component';
import { HEIGHT_ANIMATION_DURATION } from './bottomSheet.data';
import { BottomSheetRefProps } from './bottomSheet.types';
import { BottomSheetContent } from './components/bottomSheetContent';

export default {
  title: 'BottomSheet',
  component: BottomSheet,
};

const Template = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [screen, setScreen] = useState(0);
  const height = useSharedValue(0);

  const openSheet: () => void = useCallback(() => {
    bottomSheetRef.current?.scrollTo(height.value);
  }, [height.value]);

  const hideSheet: () => void = useCallback(() => {
    return bottomSheetRef.current?.scrollTo(0);
  }, []);

  const rBottomSheetContent = useAnimatedStyle(() => {
    if (height.value === 0) return {};

    return {
      height: withTiming(height.value, { duration: HEIGHT_ANIMATION_DURATION }),
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Button title="Open sheet" onPress={openSheet} />
      <BottomSheet
        hideSheet={hideSheet}
        ref={bottomSheetRef}
        leftIconName="keyboard-backspace"
        rightIconName="close"
        title="New post"
        leftIconPress={hideSheet}
        rightIconPress={hideSheet}
      >
        <Animated.View style={[{ overflow: 'hidden' }, rBottomSheetContent]}>
          {screen === 0 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 1</Text>
              </View>
            </BottomSheetContent>
          )}
          {screen === 1 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 400, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 2</Text>
              </View>
            </BottomSheetContent>
          )}
        </Animated.View>
        <View style={{ width: '100%', paddingVertical: 20, overflow: 'hidden' }}>
          <Button title="Next" onPress={() => setScreen(screen === 1 ? 0 : 1)} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export const Default = Template.bind({});
