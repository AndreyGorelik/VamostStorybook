import { View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';

import { createStyles } from './divider.styles';

export default function Divider() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.divider} />;
}
