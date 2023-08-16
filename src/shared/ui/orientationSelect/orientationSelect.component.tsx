import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Text from '../text/text.component';

export interface SelectListItem {
  label: string;
  value: string;
  id: string;
  selected?: boolean;
}

export type SelectListData = SelectListItem[];

interface OrientationSelectProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
  maxSelectCount?: number;
}

export default function OrientationSelect({
  list,
  setList,
  maxSelectCount = 3,
}: OrientationSelectProps) {
  const [errorMaxCount, setErrorMaxCount] = useState<boolean>(false);
  const selectItem = (item: SelectListItem) => {
    const selectedItemsCount = list.filter((listItem) => listItem.selected).length;

    if (item.selected || selectedItemsCount < maxSelectCount) {
      setErrorMaxCount(false);
      const updatedList = list.map((listItem: SelectListItem) => {
        if (listItem.id === item.id) {
          return { ...listItem, selected: !listItem.selected };
        }
        return listItem;
      });

      setList(updatedList);
    } else {
      setErrorMaxCount(true);
    }
  };

  return (
    <View>
      {list.map((item: SelectListItem) => {
        return (
          <TouchableOpacity key={item.id} onPress={() => selectItem(item)}>
            <Text variant="h5" color={item.selected ? 'gray' : 'black'}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      {errorMaxCount && (
        <Text variant="warning">
          Maximum {maxSelectCount.toString()} orientations can be selected.
        </Text>
      )}
    </View>
  );
}
