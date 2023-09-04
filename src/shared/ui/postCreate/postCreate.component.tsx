import { useCallback, useRef, useState } from 'react';
import { LayoutChangeEvent, SafeAreaView } from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';
import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';
import Button from '../button/button.component';

import { StepFive } from './components/stepFive';
import { StepFour } from './components/stepFour';
import { StepOne } from './components/stepOne';
import { StepSix } from './components/stepSIx';
import { StepThree } from './components/stepThree';
import { StepTwo } from './components/stepTwo';
import { createStyles } from './postCreate.styles';
import { Post } from './postCreate.types';

const PostCreate = () => {
  const [step, setStep] = useState<number>(0);
  const [fullPackageId, setFullPackageId] = useState<string | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [stepFourTitle, setStepFourTitle] = useState('');
  const [hasPerformedPreviousStep, setHasPerformedPreviousStep] = useState(false);
  const [bottomSheetImageUri, setBottomSheetImageUri] = useState('');
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
    packageId: '',
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
    setStep(0);
    return bottomSheetRef.current?.scrollTo(0);
  }, []);

  const previousStep = () => {
    if (step === 4) {
      setFullPackageId(null);
    }
    if (step !== 0) setStep(step - 1);
  };

  const bottomSheetTitle = (() => {
    if (step === 3) return 'Select package';
    if (step === 4) return stepFourTitle;
    return 'New post';
  })();

  const watchHeight = (e: LayoutChangeEvent) => {
    setMaxHeight(e.nativeEvent.layout.height);
  };

  const goBackSwipe = ({ nativeEvent }: GestureEvent<PanGestureHandlerEventPayload>) => {
    if (nativeEvent.translationX > 80 && !hasPerformedPreviousStep) {
      previousStep();
      setHasPerformedPreviousStep(true);
    } else if (nativeEvent.translationX <= 80 && hasPerformedPreviousStep) {
      setHasPerformedPreviousStep(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <PanGestureHandler onGestureEvent={goBackSwipe}>
        <SafeAreaView style={styles.gestureHandlerRootView} onLayout={watchHeight}>
          <Button title="Open sheet" onPress={openSheet} />
          <BottomSheet
            hideSheet={hideSheet}
            ref={bottomSheetRef}
            leftIconName="keyboard-backspace"
            rightIconName="close"
            title={bottomSheetTitle}
            leftIconPress={previousStep}
            rightIconPress={hideSheet}
            headerStyle={step === 4 ? 'image' : 'default'}
            uri={bottomSheetImageUri}
          >
            <ContentWrapper height={height} maxHeight={maxHeight} headerStyle="default">
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
                <BottomSheetContent setHeight={() => (height.value = maxHeight)}>
                  <StepFour
                    onSelect={setFullPackageId}
                    next={goAhead}
                    changeTitle={setStepFourTitle}
                    changeHeaderImage={setBottomSheetImageUri}
                  />
                </BottomSheetContent>
              )}
              {step === 4 && (
                <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                  <StepFive
                    post={post}
                    setPost={setPost}
                    next={goAhead}
                    packageId={fullPackageId}
                  />
                </BottomSheetContent>
              )}
              {step === 5 && (
                <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                  <StepSix onFinish={hideSheet} />
                </BottomSheetContent>
              )}
            </ContentWrapper>
          </BottomSheet>
        </SafeAreaView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default PostCreate;
