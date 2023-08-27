import useTheme from '@shared/hooks/useTheme.hook';
import { format } from 'date-fns';
import React from 'react';
import { View } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './packagePage.styles';
import { PackagePageProps } from './packagePage.types';

export default function PackagePage({ date, place, description, restrictions }: PackagePageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const formattedDate = format(new Date(date), 'EEEE MMM d @ h:mm a');

  return (
    <View style={styles.wrapper}>
      <Text variant="h3" {...styles.place}>
        {place}
      </Text>
      <View style={styles.row}>
        <Text variant="common" {...styles.date}>
          {formattedDate}
        </Text>
      </View>
      <Text variant="common" {...styles.restictions}>
        {`$${restrictions[0]} Minimum Spend • Max ${restrictions[1]} people`}
      </Text>
      <Text variant="common" {...styles.descriptions}>
        {description}
      </Text>
    </View>
  );
}
