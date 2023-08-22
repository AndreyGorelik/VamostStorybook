import { useRef, useState, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';
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
  const mock: PackagePageProps = { ...data[0] };

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
        title={mock.title}
        leftIconPress={hideSheet}
        headerStyle="image"
        uri={mock.uri}
      >
        <ContentWrapper height={height} headerStyle="image">
          <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
            <PackagePage {...mock} />
            <PackagePage {...mock} />
          </BottomSheetContent>
        </ContentWrapper>
        <Button title="Select" onPress={() => setScreen(screen === 1 ? 0 : 1)} />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export const Default = Template.bind({});
