import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { format } from 'date-fns';
import { Image, Pressable, View } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './packageCard.styles';
import { PackageCardProps } from './packageCard.types';

export default function PackageCard({
  name,
  date,
  description,
  maxPeople,
  avatar,
  onPress,
}: PackageCardProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.wrapper,
        {
          opacity: pressed ? 0.6 : 1,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        {avatar && <Image source={{ uri: getImagePath(avatar) }} style={styles.image} />}
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Text variant="small" {...styles.date}>
              {format(new Date(date), 'EEEE MMM d')}
            </Text>
          </View>
          <Text variant="h4" {...styles.title}>
            {name}
          </Text>
        </View>
        <Text variant="small" {...styles.restictions}>
          {`Max ${maxPeople} people`}
        </Text>
        <Text variant="small" {...styles.descriptions}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}
