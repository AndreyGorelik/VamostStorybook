import { useAppDispatch } from '@shared/hooks/redux.hook';
import { format } from 'date-fns';
import { useCallback, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, SafeAreaView } from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { postCreate } from 'src/store/slices/postCreateSlice';

import useTheme from '../../hooks/useTheme.hook';
import { BottomSheet } from '../bottomSheet';
import { BottomSheetRefProps } from '../bottomSheet/bottomSheet.types';
import { BottomSheetContent } from '../bottomSheet/components/bottomSheetContent';
import { ContentWrapper } from '../bottomSheet/components/contentWrapper';

import { StepFive } from './components/stepFive';
import { StepFour } from './components/stepFour';
import { StepOne } from './components/stepOne';
import { StepSix } from './components/stepSix';
import { StepThree } from './components/stepThree';
import { StepTwo } from './components/stepTwo';
import { createStyles } from './postCreate.styles';
import { Post, PostCreateProps } from './postCreate.types';

const PostCreate = ({ open, setOpen }: PostCreateProps) => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<number>(0);
  const [fullPackageId, setFullPackageId] = useState<string | null>(null);
  const [placeId, setPlaceId] = useState('');
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [stepFourTitle, setStepFourTitle] = useState('');
  const [hasPerformedPreviousStep, setHasPerformedPreviousStep] = useState(false);
  const [bottomSheetImageUri, setBottomSheetImageUri] = useState('');

  const initialPost = useMemo(
    () => ({
      host: true,
      date: new Date(Date.now() + 24 * 60 * 60 * 1000),
      description: '',
      location: 'Vitebsk',
      venue: '',
      tags: [],
      menCount: 1,
      womenCount: 0,
      othersCount: 0,
      guestMenCount: 0,
      guestWomenCount: 0,
      guestOthersCount: 0,
      packageId: '',
    }),
    []
  );

  const [post, setPost] = useState<Post>(initialPost);

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
    setOpen(false);
    setPost(initialPost);
    return bottomSheetRef.current?.scrollTo(0);
  }, [initialPost, setOpen]);

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

  if (open) openSheet();

  function createPost() {
    const newPost = JSON.parse(JSON.stringify(post));
    // eslint-disable-next-line quotes
    newPost.date = format(post.date, "yyyy-MM-dd'T'HH:mm:ss");
    newPost.name = 'New Post';
    newPost.imageData =
      'data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wD/AAAB/0nq6gAAAABJRU5ErkJggg==';
    const { host: _host, ...rest } = newPost;
    dispatch(postCreate(rest));
  }

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <PanGestureHandler onGestureEvent={goBackSwipe}>
        <SafeAreaView style={styles.gestureHandlerRootView} onLayout={watchHeight}>
          <BottomSheet
            hideSheet={hideSheet}
            ref={bottomSheetRef}
            leftIconName={step === 0 || step === 5 ? undefined : 'keyboard-backspace'}
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
                  <StepTwo post={post} setPost={setPost} next={goAhead} setPlaceId={setPlaceId} />
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
                    post={post}
                    placeId={placeId}
                    setFullPackageId={setFullPackageId}
                  />
                </BottomSheetContent>
              )}
              {step === 4 && (
                <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                  <StepFive
                    post={post}
                    setPost={setPost}
                    next={goAhead}
                    fullPackageId={fullPackageId}
                  />
                </BottomSheetContent>
              )}
              {step === 5 && (
                <BottomSheetContent setHeight={(value: number) => (height.value = value)}>
                  <StepSix createPost={createPost} onFinish={hideSheet} />
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
