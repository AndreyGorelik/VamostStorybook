import useTheme from '@shared/hooks/useTheme.hook';
import { Image, Pressable, View } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './packageCard.styles';
import { PackageCardProps } from './packageCard.types';
export default function PackageCard({
  name,
  date,
  description,
  maxPeople,
  place,
  imageUrl,
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
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Text variant="small" {...styles.date}>
              {date}
            </Text>
            <Text variant="small" {...styles.separator}>
              @
            </Text>
            <Text variant="small" {...styles.place}>
              {place}
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
