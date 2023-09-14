import { AntDesign } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './hostingLabel.styles';

export default function HostingLabel({ type }: { type: 'Host' | 'Guest' }) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.label}>
      <AntDesign name="star" size={24} color={theme.colors.secondary} />
      <Text variant="h5" color={theme.colors.secondary}>
        You are {type === 'Host' ? 'hosting' : 'guesting'}
      </Text>
    </View>
  );
}
