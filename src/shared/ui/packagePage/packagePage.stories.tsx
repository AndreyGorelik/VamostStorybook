import useTheme from '@shared/hooks/useTheme.hook';
import { useRef, useState, useCallback } from 'react';
import { LayoutChangeEvent, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';
import { Button } from '../button';

import PackagePage from './packagePage.component';
import { data } from './packagePage.data';
import { createStyles } from './packagePage.styles';

export default {
  title: 'PackagePage',
  component: PackagePage,
};

const Template = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const height = useSharedValue(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const mock = { ...data[0] };
  const theme = useTheme();
  const styles = createStyles(theme);

  const openSheet: () => void = useCallback(() => {
    bottomSheetRef.current?.scrollTo(height.value);
  }, [height.value]);

  const hideSheet: () => void = useCallback(() => {
    return bottomSheetRef.current?.scrollTo(0);
  }, []);

  const select = () => {
    return;
  };
  const watchHeight = (e: LayoutChangeEvent) => {
    setMaxHeight(e.nativeEvent.layout.height);
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaView style={styles.gestureHandler} onLayout={watchHeight}>
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
          <ContentWrapper headerStyle="image" maxHeight={maxHeight} height={height}>
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <PackagePage {...mock} onSelect={select} />
            </BottomSheetContent>
          </ContentWrapper>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export const Default = Template.bind({});
