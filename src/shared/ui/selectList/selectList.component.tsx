import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import useTheme from '../../hooks/useTheme.hook';
import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

import { SelectListProps, SelectListItem } from './selectList.types';

export default function SelectList({
  selected,
  setSelected,
  listOptions,
  variant,
}: SelectListProps) {
  const theme = useTheme();
  const selectItem = (label: string) => {
    setSelected(label);
  };

  return (
    <>
      {variant === 'buttonsList' && (
        <View style={{ gap: 10 }}>
          {listOptions.map((item: SelectListItem) => {
            return (
              <OutlinedButton
                key={item.id}
                title={item.label}
                onPress={() => selectItem(item.label)}
                color={item.label === selected ? theme.colors.selected : theme.colors.text}
              />
            );
          })}
        </View>
      )}
      {variant === 'textList' && (
        <View style={{ gap: 10 }}>
          {listOptions.map((item: SelectListItem) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                onPress={() => selectItem(item.label)}
              >
                <Text
                  variant="h5"
                  color={item.label === selected ? theme.colors.selected : theme.colors.text}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
}
