import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { SelectListData, SelectListItem } from '../orientationSelect/orientationSelect.component';
import Text from '../text/text.component';

interface TagListProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
}

export default function TagList({ list, setList }: TagListProps) {
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
            style={[styles.tagButton, { backgroundColor: item.selected ? '#a8a8a8' : '#f0f0f0' }]}
          >
            <Text style={styles.text}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  tagButton: {
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: 'black',
  },
});
