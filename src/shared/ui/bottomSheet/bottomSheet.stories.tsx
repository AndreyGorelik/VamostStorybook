import { useCallback, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { Button } from '../button';
import { FILE_MOCK } from '../photoInput/photoInput.data';

import BottomSheet from './bottomSheet.component';
import { BottomSheetRefProps } from './bottomSheet.types';
import { BottomSheetContent } from './components/bottomSheetContent';
import { ContentWrapper } from './components/contentWrapper';

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
        headerStyle="image"
        uri={FILE_MOCK}
      >
        <ContentWrapper height={height} headerStyle="image">
          {screen === 0 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 1</Text>
              </View>
            </BottomSheetContent>
          )}
          {screen === 1 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 800, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 2</Text>
              </View>
            </BottomSheetContent>
          )}
        </ContentWrapper>
        <Button title="Next" onPress={() => setScreen(screen === 1 ? 0 : 1)} />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export const Default = Template.bind({});
