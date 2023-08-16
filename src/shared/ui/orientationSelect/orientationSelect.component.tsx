import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Text from '../text/text.component';

export interface OrientationItem {
  label: string;
  value: string;
  id: string;
  selected?: boolean;
}

export type OrientationData = OrientationItem[];

interface OrientationSelectProps {
  list: OrientationData;
  setList: React.Dispatch<React.SetStateAction<OrientationData>>;
  maxSelectCount?: number;
}

export default function OrientationSelect({
  list,
  setList,
  maxSelectCount = 3,
}: OrientationSelectProps) {
  const [errorMaxCount, setErrorMaxCount] = useState<boolean>(false);
  const selectItem = (item: OrientationItem) => {
    const selectedItemsCount = list.filter((listItem) => listItem.selected).length;

    if (item.selected || selectedItemsCount < maxSelectCount) {
      setErrorMaxCount(false);
      const updatedList = list.map((listItem: OrientationItem) => {
        if (listItem.label === item.label) {
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
      {list.map((item: OrientationItem) => {
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
