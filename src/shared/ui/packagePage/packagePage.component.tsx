import React from 'react';
import { View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import { dateConvert } from '../../utils/dateConvert';
import Text from '../text/text.component';

import { createStyles } from './packagePage.styles';
import { PackagePageProps } from './packagePage.types';

export default function PackagePage({ date, place, description, restrictions }: PackagePageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { convertedDate, convertedTime } = dateConvert(date);

  return (
    <View style={styles.wrapper}>
      <Text variant="h3" {...styles.place}>
        {place}
      </Text>
      <View style={styles.row}>
        <Text variant="common" {...styles.date}>
          {convertedDate}
        </Text>
        <Text variant="common" {...styles.separator}>
          @
        </Text>
        <Text variant="common" {...styles.separator}>
          {convertedTime}
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
