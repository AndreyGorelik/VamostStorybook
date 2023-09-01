import { FontAwesome } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';

import { Button } from '../../../button';

import { createStyles } from './stepSix.styles';
import { StepSixProps } from './stepSix.types';

export default function StepSix({ onFinish }: StepSixProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <>
      <View style={styles.finishMessage}>
        <FontAwesome name="check-circle" size={125} color={'black'} />
        <Text variant="h3">Post created!</Text>
      </View>
      <Button title="Finish" onPress={onFinish} />
    </>
  );
}
