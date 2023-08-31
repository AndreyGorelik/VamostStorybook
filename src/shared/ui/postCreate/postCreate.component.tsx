import { useCallback, useRef, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';
import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';
import Button from '../button/button.component';

import { StepFour } from './components/stepFour';
import { StepOne } from './components/stepOne';
import { StepThree } from './components/stepThree';
import { StepTwo } from './components/stepTwo';
import { createStyles } from './postCreate.styles';
import { Post } from './postCreate.types';

const PostCreate = () => {
  const [step, setStep] = useState<number>(0);
  const [fullPackageId, setFullPackageId] = useState<string | null>(null);

  const [post, setPost] = useState<Post>({
    host: false,
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    description: '',
    location: 'Miami Fl',
    tags: [],
    menCount: 1,
    womenCount: 0,
    otherCount: 0,
    guestsMenCount: 0,
    guestsWomenCount: 0,
    guestsOtherCount: 0,
  });
  const theme = useTheme();
  const styles = createStyles(theme);
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
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

  const previousStep = () => {
    if (step !== 0) setStep(step - 1);
  };

  const bottomSheetTitle = () => {
    if (step == 3) return 'Select package';
    return 'New post';
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button title="Open sheet" onPress={openSheet} />
        <BottomSheet
          hideSheet={hideSheet}
          ref={bottomSheetRef}
          leftIconName="keyboard-backspace"
          rightIconName="close"
          title={bottomSheetTitle()}
          leftIconPress={previousStep}
          rightIconPress={hideSheet}
          headerStyle="default"
        >
          <ContentWrapper height={height} headerStyle="default">
            {step === 0 && (
              <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                <StepOne post={post} setPost={setPost} next={goAhead} />
              </BottomSheetContent>
            )}
            {step === 1 && (
              <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                <StepTwo post={post} setPost={setPost} next={goAhead} />
              </BottomSheetContent>
            )}
            {step === 2 && (
              <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                <StepThree post={post} setPost={setPost} next={goAhead} />
              </BottomSheetContent>
            )}
            {step === 3 && (
              <BottomSheetContent>
                <StepFour post={post} setPost={setPost} next={goAhead} />
              </BottomSheetContent>
            )}
            {step === 3 && (
              <BottomSheetContent>
                <StepFour post={post} setPost={setPost} next={goAhead} />
              </BottomSheetContent>
            )}
          </ContentWrapper>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PostCreate;
