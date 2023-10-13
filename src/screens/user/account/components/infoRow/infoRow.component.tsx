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

  const renderValue = () => {
    if (children) {
      return children;
    } else if (input) {
      return (
        <View style={{ marginVertical: 4, flex: 1 }}>
          <Input value={value} editable={editable} onChangeText={onChangeText} noGap />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>{value}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text width={130} style={styles.text}>
        {title}:
      </Text>
      {renderValue()}
    </View>
  );
}
