import { useRef, useState, useCallback } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { dateConvert } from '../../utils/dateConvert';
import { BottomSheet } from '../bottomSheet';
import { HEIGHT_ANIMATION_DURATION } from '../bottomSheet/bottomSheet.data';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { Button } from '../button';

import PackagePage from './packagePage.component';
import { data } from './packagePage.data';
import { PackagePageProps } from './packagePage.types';

export default {
  title: 'PackagePage',
  component: PackagePage,
};

const Template = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [screen, setScreen] = useState(0);
  const height = useSharedValue(0);
  const mock: PackagePageProps = { ...data[0], date: dateConvert(data[0].date) };

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
        title={mock.title}
        leftIconPress={hideSheet}
        headerStyle="image"
        uri={mock.uri}
      >
        <Animated.View style={[{ overflow: 'hidden' }, rBottomSheetContent]}>
          <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
            <PackagePage />
          </BottomSheetContent>
        </Animated.View>
        <View style={{ width: '100%', paddingVertical: 20, overflow: 'hidden' }}>
          <Button title="Next" onPress={() => setScreen(screen === 1 ? 0 : 1)} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export const Default = Template.bind({});
