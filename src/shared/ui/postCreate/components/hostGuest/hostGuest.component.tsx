import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import { Button } from '../../../button';

import { createStyles } from './hostGuest.styles';
import { HostGuestProps } from './hostGuest.types';

export default function HostGuest({ onSelect }: HostGuestProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <Button title="I am the Host (i am paying)" onPress={() => onSelect(true)} />
      <Button title="I am the Guest (i am not paying)" onPress={() => onSelect(false)} />
    </View>
  );
}
