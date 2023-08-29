import useTheme from '@shared/hooks/useTheme.hook';
import { Image, Pressable, View } from 'react-native';

import Text from '../text/text.component';

import { FILE_MOCK } from './packageCard.data';
import { createStyles } from './packageCard.styles';
import { PackageCardProps } from './packageCard.types';

export default function PackageCard({
  title,
  date,
  description,
  restrictions,
  place,
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
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: FILE_MOCK }} style={styles.image} />
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
            {title}
          </Text>
        </View>
        <Text variant="small" {...styles.restictions}>
          {`$${restrictions[0]} Minimum Spend • Max ${restrictions[1]} people`}
        </Text>
        <Text variant="small" {...styles.descriptions}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}
