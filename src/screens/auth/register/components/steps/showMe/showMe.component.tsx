import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './showMe.styles';
import { ShowMeProps } from './showMe.types';

export default function ShowMe({ goAhead }: ShowMeProps) {
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
      <Text variant="h2">Show me</Text>

      <View style={styles.content}></View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
