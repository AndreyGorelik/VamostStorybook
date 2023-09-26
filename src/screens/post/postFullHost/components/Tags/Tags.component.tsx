import { MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';
import { PossibleTags } from 'src/types/actions/actions.types';

import { createStyles } from './Tags.styles';
import { TagsProps } from './Tags.types';

export default function Tags({ tags }: TagsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const icons: Record<PossibleTags, keyof typeof MaterialCommunityIcons.glyphMap> = {
    food: 'silverware',
    drinks: 'glass-wine',
    dance: 'dance-ballroom',
    hookah: 'cigar',
  };

  return (
    <View style={styles.tags}>
      <Text>Tags: </Text>
      {tags.map((item: PossibleTags) => {
        return (
          <View key={item} style={styles.tagItem}>
            <MaterialCommunityIcons name={icons[item]} size={24} color={theme.colors.tagIcon} />
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
}
