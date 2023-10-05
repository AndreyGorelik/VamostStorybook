import useTheme from '@shared/hooks/useTheme.hook';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';

import { createStyles } from './infoRow.styles';
import { InfoRowProps } from './infoRow.types';

export default function InfoRow({
  children,
  value,
  title,
  onChangeText,
  editable,
  input = true,
}: InfoRowProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <Text width={130} style={styles.text}>
        {title}:
      </Text>
      {children ? (
        children
      ) : input ? (
        <Input value={value} editable={editable} onChangeText={onChangeText} noGap />
      ) : (
        <Text>{value}</Text>
      )}
    </View>
  );
}
