import { AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';

import { createStyles } from './counter.styles';
import { CounterProps } from './counter.types';

export default function Counter({ count, increaseValue, decreaseValue }: CounterProps) {
  const theme = useTheme();
  const styles = createStyles(theme, count === 0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Counter</Text>
      <View style={styles.controls}>
        <Pressable onPress={decreaseValue}>
          <AntDesign name="minuscircle" size={27} style={styles.decrease} />
        </Pressable>
        <Text style={styles.valueText}>{count}</Text>
        <Pressable onPress={increaseValue}>
          <AntDesign name="pluscircle" size={27} style={styles.increase} />
        </Pressable>
      </View>
    </View>
  );
}
