import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import { Input } from '../../../../../../shared/ui/input';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './nickname.styles';
import { NicknameProps } from './nickname.types';

export default function Code({ goAhead }: NicknameProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    control,
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
        My nickname is...
      </Text>
      <View style={styles.subInfo}>
        <Text variant="common" fontSize={17}>
          This is how you will appear in Vamost.
        </Text>
      </View>

      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="nickname"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Nickname" />
          )}
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
