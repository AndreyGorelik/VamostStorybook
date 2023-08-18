import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

import Text from '../text/text.component';

import { styles } from './hostingLabel.styles';

export default function HostingLabel() {
  return (
    <View style={styles.label}>
      <AntDesign name="star" size={24} color="white" />
      <Text variant="h5" color="white">
        You are hosting
      </Text>
    </View>
  );
}
