import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, Link } from 'expo-router';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';
import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';
import Button from '../button/button.component';
import { Header } from '../header';
import Text from '../text/text.component';

import HostGuest from './components/hostGuest/hostGuest.component';
import { createStyles } from './postCreate.styles';

const PostCreate = () => {
  const [step, setStep] = useState<number>(0);
  const [post, setPost] = useState({
    host: false,
  });
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  // const [screen, setScreen] = useState(0);
  const height = useSharedValue(0);

  function goAhead() {
    setStep(step + 1);
  }
  const openSheet: () => void = useCallback(() => {
    bottomSheetRef.current?.scrollTo(height.value);
  }, [height.value]);

  const hideSheet: () => void = useCallback(() => {
    return bottomSheetRef.current?.scrollTo(0);
  }, []);

  const chooseHostOrGuest = (host: boolean) => {
    setPost({
      ...post,
      host,
    });
    goAhead();
  };

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
        headerStyle="default"
      >
        <ContentWrapper height={height} headerStyle="image">
          {step === 0 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 200, justifyContent: 'center' }}>
                <HostGuest onSelect={chooseHostOrGuest} />
              </View>
            </BottomSheetContent>
          )}
          {step === 1 && (
            <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
              <View style={{ height: 800, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 2</Text>
              </View>
            </BottomSheetContent>
          )}
        </ContentWrapper>
        {step !== 0 && <Button title="Next" onPress={() => setStep(step === 1 ? 0 : 1)} />}
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default PostCreate;
