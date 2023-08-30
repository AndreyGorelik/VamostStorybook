import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import { createStyles } from './divider.styles';

export default function Divider() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.divider} />;
}
