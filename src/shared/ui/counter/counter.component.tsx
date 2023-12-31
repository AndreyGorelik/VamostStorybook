import { AntDesign } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { Pressable, View } from 'react-native';

import { createStyles } from './counter.styles';
import { CounterProps } from './counter.types';

export default function Counter({ count, increaseValue, decreaseValue, title }: CounterProps) {
  const theme = useTheme();
  const styles = createStyles(theme, count === 0);

  return (
    <View style={styles.wrapper}>
      <Text variant="common" {...styles.text}>
        {`${title[0].toUpperCase()}` + title.slice(1)}
      </Text>
      <View style={styles.controls}>
        <Pressable onPress={decreaseValue}>
          <AntDesign name="minuscircle" size={27} style={styles.decrease} />
        </Pressable>
        <Text variant="common" {...styles.valueText}>
          {`${count}`}
        </Text>
        <Pressable onPress={increaseValue}>
          <AntDesign name="pluscircle" size={27} style={styles.increase} />
        </Pressable>
      </View>
    </View>
  );
}
