import { MaterialIcons } from '@expo/vector-icons';
import { useSelectCity } from '@shared/hooks/useSelectCity.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Input } from '@shared/ui/input';
import { SelectList } from '@shared/ui/selectList';
import { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import FixedParam from './components/fixedParam.component';
import { createStyles } from './selectCity.styles';
import { SelectCityProps } from './selectCity.types';

export default function SelectCity({ open, setOpen, setCity }: SelectCityProps) {
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const { items, setItem, info, setInfo } = useSelectCity(query, setCity, setOpen);
  const opacity = useDerivedValue(() => {
    return withTiming(open ? 1 : 0, { duration: 300 });
  }, [open]);

  function handleSelect(value: string) {
    setQuery('');
    setItem(value);
  }

  const rBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value * 0.1,
    };
  }, []);

  return (
    open && (
      <>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#000000',
            },
            rBackdropStyle,
          ]}
          onTouchStart={() => setOpen(false)}
        ></Animated.View>
        <Animated.View
          style={styles.wrapper}
          exiting={FadeOut.duration(300)}
          entering={FadeIn.duration(300)}
        >
          <Pressable style={styles.close}>
            <MaterialIcons name="close" onPress={() => setOpen(false)} size={24} />
          </Pressable>
          <View style={styles.input}>
            <Input
              value={query}
              onChangeText={setQuery}
              placeholder={`Enter ${info.state ? 'city' : info.country ? 'state' : 'country'}`}
            />
          </View>
          <View style={styles.underInput}>
            {info.country && (
              <FixedParam
                name={info.countryLabel}
                onPress={() => {
                  setInfo({ ...info, country: '', state: '' });
                }}
              />
            )}
            {info.state && (
              <FixedParam
                name={info.stateLabel}
                onPress={() => {
                  setInfo({ ...info, state: '' });
                }}
              />
            )}
          </View>
          <ScrollView style={{ padding: 10 }}>
            <SelectList
              listOptions={items}
              selected={info.city}
              setSelected={handleSelect}
              variant="buttonsList"
            />
          </ScrollView>
        </Animated.View>
      </>
    )
  );
}
