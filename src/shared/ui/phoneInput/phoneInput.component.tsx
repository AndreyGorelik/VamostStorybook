import React, { useRef, useState } from 'react';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import LibPhoneInput from 'react-native-phone-input';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';

import { ANIMATION_DURATION } from './phoneInput.data';
import { createStyles } from './phoneInput.styles';
import { PhoneInputProps } from './phoneInput.types';

export default function PhoneInput({ setNumber, value }: PhoneInputProps) {
  const phoneRef = useRef<LibPhoneInput>(null);
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const styles = createStyles(theme);
  const progress = useSharedValue(value ? 1 : 0);

  function onPressFlag() {
    setVisible(true);
  }

  function onSelect(country: Country) {
    phoneRef.current?.selectCountry(country.cca2.toLowerCase());
  }

  const borderReanimatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.placeholder, theme.colors.primary]
    );
    return {
      borderColor,
    };
  }, []);

  const movePlaceholder = (number: string) => {
    if (number.length > 1) {
      progress.value = withTiming(1, { duration: ANIMATION_DURATION });
    } else {
      progress.value = withTiming(0, { duration: ANIMATION_DURATION });
    }

    setNumber(number);
  };

  return (
    <Animated.View style={[styles.wrapper, borderReanimatedStyle]}>
      <LibPhoneInput
        ref={phoneRef}
        onPressFlag={onPressFlag}
        textProps={{
          placeholder: 'Enter your phone number',
          placeholderTextColor: theme.colors.placeholder,
        }}
        textStyle={{
          fontSize: 17,
          fontFamily: 'NunitoSans10pt-Regular',
        }}
        offset={10}
        initialValue={value ?? ''}
        autoFormat={true}
        onChangePhoneNumber={movePlaceholder}
      />
      <CountryPicker
        countryCode="BE"
        withFlag
        withCallingCode
        withCallingCodeButton
        withFilter
        withAlphaFilter
        visible={visible}
        containerButtonStyle={{ width: 0, height: 0 }}
        onSelect={onSelect}
        onClose={() => setVisible(false)}
      />
    </Animated.View>
  );
}
