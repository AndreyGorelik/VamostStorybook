import useTheme from '@shared/hooks/useTheme.hook';
import { ScrollView, View } from 'react-native';

import { OutlinedButton } from '../outlinedBtn';

import { SelectListProps, SelectListItem } from './selectList.types';

export default function SelectList({ list, setList }: SelectListProps) {
  const theme = useTheme();

  const selectItem = (item: SelectListItem) => {
    const updatedList = list.map((listItem: SelectListItem) => {
      if (listItem.id === item.id) {
        return { ...listItem, selected: !listItem.selected };
      } else {
        return { ...listItem, selected: false };
      }
    });

    setList(updatedList);
  };

  return (
    <View>
      <ScrollView>
        <View style={{ gap: 10 }}>
          {list.map((item: SelectListItem) => {
            return (
              <OutlinedButton
                key={item.id}
                title={item.label}
                onPress={() => selectItem(item)}
                color={item.selected ? theme.colors.selected : theme.colors.listItem}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
