import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { registerNicknameAction, setNextStep } from 'src/store/slices/auth.slice';

import { createStyles } from './nickname.styles';

export default function Code() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.authSlice);
  const { nickname } = useAppSelector((state) => state.userSlice);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      nickName: nickname || '',
    },
  });

  function onSubmit(data: { nickName: string }) {
    if (nickname === data.nickName) {
      dispatch(setNextStep());
    }
    dispatch(registerNicknameAction(data));
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
        {error && <Text variant="warning">{error}</Text>}
      </View>
      <Button
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isLoading}
      />
    </View>
  );
}
