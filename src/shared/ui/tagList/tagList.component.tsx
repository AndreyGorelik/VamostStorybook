import { View, TouchableOpacity } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import { SelectListItem } from '../selectList/selectList.types';
import Text from '../text/text.component';

import { createStyles } from './tagList.styles';
import { TagListProps } from './tagList.types';

export default function TagList({ list, setList }: TagListProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const selectItem = (item: SelectListItem) => {
    const updatedList = list.map((listItem: SelectListItem) => {
      if (listItem.id === item.id) {
        return { ...listItem, selected: !listItem.selected };
      }
      return listItem;
    });

    setList(updatedList);
  };

  return (
    <View style={styles.row}>
      {list.map((item: SelectListItem) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => selectItem(item)}
            style={[
              styles.tagButton,
              { backgroundColor: item.selected ? theme.colors.selectedTag : theme.colors.tag },
            ]}
          >
            <Text style={styles.text}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
