import useTheme from '@shared/hooks/useTheme.hook';
import { ActivityIndicator, View } from 'react-native';

import { createStyles } from './pageLoader.styles';

export default function PageLoader() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={50} color={theme.colors.primary} />
    </View>
  );
}
