import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import Text from '../text/text.component';

import { createStyles } from './hostingLabel.styles';

export default function HostingLabel() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.label}>
      <AntDesign name="star" size={24} color={theme.colors.secondary} />
      <Text variant="h5" color={theme.colors.secondary}>
        You are hosting
      </Text>
    </View>
  );
}
