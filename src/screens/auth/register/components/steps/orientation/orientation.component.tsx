import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './orientation.styles';
import { OrientationProps } from './orientation.types';

export default function Orientation({ goAhead }: OrientationProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  function onSubmit() {
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        {'My sexual \norientation is'}
      </Text>

      <View style={styles.content}></View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
