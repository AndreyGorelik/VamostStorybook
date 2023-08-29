import useTheme from '@shared/hooks/useTheme.hook';
import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

import { SelectListProps, SelectListItem } from './selectList.types';

export default function SelectList({
  list,
  setList,
  textError,
  maxSelectCount,
  moreOption,
  moreAction,
}: SelectListProps) {
  const [errorMaxCount, setErrorMaxCount] = useState<boolean>(false);
  const theme = useTheme();

  const selectMultiItem = (item: SelectListItem) => {
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
      {maxSelectCount > 1 && (
        <View style={{ gap: 10 }}>
          {list.map((item: SelectListItem) => {
            return (
              <TouchableOpacity key={item.id} onPress={() => selectMultiItem(item)}>
                <Text
                  variant="h5"
                  color={item.selected ? theme.colors.selected : theme.colors.listItem}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
          {errorMaxCount && textError && <Text variant="warning">{textError}</Text>}
        </View>
      )}

      {maxSelectCount === 1 && (
        <View style={{ gap: 10 }}>
          {list.map((item: SelectListItem, index, array) => {
            const isLastElement = index === array.length - 1;
            return (
              <OutlinedButton
                key={item.id}
                title={item.label}
                onPress={
                  isLastElement && moreOption && moreAction
                    ? () => moreAction(item)
                    : () => selectItem(item)
                }
                color={item.selected ? theme.colors.selected : theme.colors.listItem}
                icon={isLastElement && moreOption ? 'arrow-right' : undefined}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}
