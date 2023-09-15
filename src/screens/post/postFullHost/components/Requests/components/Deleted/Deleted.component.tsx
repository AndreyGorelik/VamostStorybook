import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';

import { createStyles } from './Deleted.styles';
import { DeletedProps } from './Deleted.types';

export default function Deleted({ id }: DeletedProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View>
      <Text>Deleted</Text>
    </View>
  );
}
