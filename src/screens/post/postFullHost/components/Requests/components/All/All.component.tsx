import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';

import { createStyles } from './All.styles';
import { AllProps } from './All.types';

export default function All({ id }: AllProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View>
      <Text>All</Text>
    </View>
  );
}
