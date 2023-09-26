import useTheme from '@shared/hooks/useTheme.hook';
import { View, TouchableOpacity } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './tagList.styles';
import { TagListProps } from './tagList.types';

export default function TagList({ selectedList, setSelectedList, tagsList }: TagListProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const toggleTag = (tagLabel: string) => {
    if (selectedList.includes(tagLabel)) {
      setSelectedList(selectedList.filter((tag: string) => tag !== tagLabel));
    } else {
      setSelectedList([...selectedList, tagLabel]);
    }
  };

  return (
    <View style={styles.row}>
      {tagsList?.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => toggleTag(item.label)}
          style={[
            styles.tagButton,
            {
              backgroundColor: selectedList.includes(item.label)
                ? theme.colors.selectedTag
                : theme.colors.tag,
            },
          ]}
        >
          <Text style={styles.textCapitalize}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
