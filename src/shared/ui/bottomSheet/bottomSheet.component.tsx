import { MaterialIcons } from '@expo/vector-icons';
import { forwardRef, PropsWithChildren, useCallback, useImperativeHandle } from 'react';
import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
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

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 30;

const BottomSheet = forwardRef<BottomSheetRefProps, PropsWithChildren<BottomSheetProps>>(
  (
    { hideSheet, children, leftIconName, rightIconName, title, leftIconPress, rightIconPress },
    ref
  ) => {
    const translateY = useSharedValue(0);
    //const context = useSharedValue({ y: 0 });
    const active = useSharedValue(false);
    const theme = useTheme();
    const styles = createStyles(theme, SCREEN_HEIGHT);
    const height = useSharedValue(0);

    const scrollTo = useCallback(
      (destination: number) => {
        'worklet';
        active.value = destination !== 0;
        translateY.value = withTiming(destination === 0 ? 0 : -SCREEN_HEIGHT + 30, {
          duration: TRANSLATION_ANIMATION_DURATION,
        });
      },
      [translateY, active]
    );

    useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]);

    // const tap = Gesture.Pan()
    //   .onStart(() => {
    //     context.value = { y: translateY.value };
    //   })
    //   .onUpdate((event) => {
    //     translateY.value = event.translationY + context.value.y;
    //     translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    //   })
    //   .onEnd(() => {
    //     if (translateY.value > -SCREEN_HEIGHT / 2.5) {
    //       scrollTo(0);
    //       runOnJS(hideSheet)();
    //     } else if (translateY.value < -SCREEN_HEIGHT / 1.65) {
    //       scrollTo(MAX_TRANSLATE_Y);
    //     } else {
    //       scrollTo(height.value);
    //     }
    //   });

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
            // Dismiss the BottomSheet
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
        {/* <GestureDetector gesture={tap}> */}
        <Animated.View
          style={[styles.bottomSheetContainer, rBottomSheetStyle]}
          onLayout={(e) => {
            //console.log(e.nativeEvent);
            height.value = e.nativeEvent.layout.height;
          }}
        >
          <View style={styles.header}>
            {leftIconName && (
              <Pressable style={styles.leftIcon} onPress={leftIconPress}>
                <MaterialIcons name={leftIconName} size={24} />
              </Pressable>
            )}
            <Text style={styles.headerText}>{title}</Text>
            {rightIconName && (
              <Pressable style={styles.rightIcon} onPress={rightIconPress}>
                <MaterialIcons name={rightIconName} size={24} />
              </Pressable>
            )}
          </View>
          {children}
        </Animated.View>
        {/* </GestureDetector> */}
      </>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
