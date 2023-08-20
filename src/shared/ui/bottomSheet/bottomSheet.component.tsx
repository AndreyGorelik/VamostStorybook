import { forwardRef, PropsWithChildren, useCallback, useImperativeHandle } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';

import { OPACITY_ANIMATION_DURATION, TRANSLATION_ANIMATION_DURATION } from './bottomSheet.data';
import { createStyles } from './bottomSheet.styles';
import { BottomSheetRefProps, BottomSheetProps } from './bottomSheet.types';
import { Header } from './components/header';
import { HeaderImage } from './components/headerImage';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 30;

const BottomSheet = forwardRef<BottomSheetRefProps, PropsWithChildren<BottomSheetProps>>(
  (
    {
      hideSheet,
      children,
      leftIconName,
      rightIconName,
      title,
      leftIconPress,
      rightIconPress,
      headerStyle,
      uri,
    },
    ref
  ) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const theme = useTheme();
    const styles = createStyles(theme, SCREEN_HEIGHT);

    const scrollTo = useCallback(
      (destination: number) => {
        'worklet';
        active.value = destination !== 0;
        translateY.value = withTiming(destination === 0 ? 0 : -SCREEN_HEIGHT + 20, {
          duration: TRANSLATION_ANIMATION_DURATION,
        });
      },
      [active, translateY]
    );

    useImperativeHandle(
      ref,
      () => {
        return {
          scrollTo,
        };
      },
      [scrollTo]
    );

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 20],
        Extrapolate.CLAMP
      );

      return {
        borderRadius,
        transform: [
          {
            translateY: withTiming(translateY.value, {
              duration: TRANSLATION_ANIMATION_DURATION,
            }),
          },
        ],
      };
    });

    const rBackdropStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(active.value ? 1 : 0, { duration: OPACITY_ANIMATION_DURATION }),
      };
    }, []);

    const rBackdropProps = useAnimatedProps(() => {
      return {
        pointerEvents: active.value ? 'auto' : 'none',
      } as never;
    }, []);

    return (
      <>
        <Animated.View
          onTouchStart={() => {
            scrollTo(0);
            runOnJS(hideSheet)();
          }}
          animatedProps={rBackdropProps}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
            rBackdropStyle,
          ]}
          pointerEvents="none"
        ></Animated.View>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          {headerStyle === 'default' && (
            <Header
              title={title}
              leftIconName={leftIconName}
              leftIconPress={leftIconPress}
              rightIconName={rightIconName}
              rightIconPress={rightIconPress}
            />
          )}
          {headerStyle === 'image' && (
            <HeaderImage
              title={title}
              leftIconName={leftIconName}
              leftIconPress={leftIconPress}
              rightIconName={rightIconName}
              rightIconPress={rightIconPress}
              uri={uri}
            />
          )}
          <View style={[styles.content]}>{children}</View>
        </Animated.View>
      </>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
