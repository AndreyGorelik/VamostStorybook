import useTheme from '@shared/hooks/useTheme.hook';
import { useCallback } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

import { createStyles } from './selectList.styles';
import { SelectListProps, SelectListItem } from './selectList.types';

const OUTLINED_BTN_HEIGHT = 50;

export default function SelectList({
  selected,
  setSelected,
  listOptions,
  variant,
}: SelectListProps) {
  const theme = useTheme();
  const selectItem = useCallback(
    (label: string) => {
      setSelected(label);
    },
    [setSelected]
  );

  const styles = createStyles(theme);

  const renderOutlinedButton = useCallback(
    ({ item }: { item: SelectListItem }) => (
      <OutlinedButton
        title={item.label}
        onPress={() => selectItem(item.id)}
        color={item.id === selected ? theme.colors.selected : theme.colors.text}
      />
    ),
    [selectItem, selected, theme.colors.selected, theme.colors.text]
  );

  const renderListItem = useCallback(
    ({ item }: { item: SelectListItem }) => (
      <TouchableOpacity
        style={styles.listItem}
        activeOpacity={0.8}
        key={item.id}
        onPress={() => selectItem(item.id)}
      >
        <Text variant="h5" color={item.id === selected ? theme.colors.selected : theme.colors.text}>
          {item.label}
        </Text>
      </TouchableOpacity>
    ),
    [selectItem, selected, styles.listItem, theme.colors.selected, theme.colors.text]
  );

  return (
    <>
      {variant === 'buttonsList' && (
        <View>
          <FlatList
            data={listOptions}
            contentContainerStyle={styles.btnList}
            renderItem={renderOutlinedButton}
            keyExtractor={(item) => `${item.id}`}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            extraData={selected}
            ListEmptyComponent={() => <ActivityIndicator size="small" color={theme.colors.text} />}
            getItemLayout={(data, index) => ({
              length: OUTLINED_BTN_HEIGHT,
              offset: OUTLINED_BTN_HEIGHT * index + styles.btnList.gap,
              index,
            })}
            removeClippedSubviews={true}
          />
        </View>
      )}
      {variant === 'textList' && (
        <View>
          <FlatList
            data={listOptions}
            contentContainerStyle={styles.btnList}
            renderItem={renderListItem}
            keyExtractor={(item) => `${item.id}`}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            extraData={selected}
            ListEmptyComponent={() => <ActivityIndicator size="small" color={theme.colors.text} />}
            getItemLayout={(data, index) => ({
              length: OUTLINED_BTN_HEIGHT,
              offset: OUTLINED_BTN_HEIGHT * index + styles.btnList.gap,
              index,
            })}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </>
  );
}
