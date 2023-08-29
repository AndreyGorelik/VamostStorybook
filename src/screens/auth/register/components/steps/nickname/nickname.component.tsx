import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { registerNickname } from 'src/store/slices/authSlice';

import { createStyles } from './nickname.styles';

export default function Code() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      nickName: '',
    },
  });

  function onSubmit(data: { nickName: string }) {
    dispatch(registerNickname(data));
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">My nickname is...</Text>
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
          name="nickName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Nickname" />
          )}
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
