import Text from '@shared/ui/text/text.component';
import { Pressable } from 'react-native';

import { createStyles } from './filterItem.styles';
import { FilterItemProps } from './filterItem.types';

export default function FilterItem({ name, filter, setFilter, theme }: FilterItemProps) {
  const styles = createStyles(theme, filter, name);
  return (
    <Pressable onPress={() => setFilter(name)} style={styles.wrapper}>
      <Text variant="common" {...styles.text}>
        {name}
      </Text>
    </Pressable>
  );
}
