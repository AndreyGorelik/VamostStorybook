import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { CodeInput } from '@shared/ui/codeInput';
import Text from '@shared/ui/text/text.component';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { confirmCodeAction } from 'src/store/slices/auth.slice';

import { createStyles } from './code.styles';
import { CodeProps, CodeValues } from './code.types';

export default function Code({ number }: CodeProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { phoneNumber } = useAppSelector((state) => state.userSlice);
  const { isLoading, error } = useAppSelector((state) => state.authSlice);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CodeValues>({
    defaultValues: {
      code: '',
    },
  });

  function onSubmit(value: { code: string }) {
    dispatch(confirmCodeAction({ code: value.code, phoneNumber }));
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">Enter the 6-digit code sent to you at</Text>
      <Text variant="h2" noMargin={true} color={theme.colors.selected}>
        {phoneNumber || number}
      </Text>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{ required: true, validate: (code) => code.length === 6 }}
          name="code"
          render={({ field: { onChange } }) => <CodeInput onChange={onChange} />}
        />
        {error && <Text variant="warning">{error}</Text>}
      </View>
      <View style={styles.agreement}>
        <Text variant="small" align="center">
          Didn&apos;t get a code?
        </Text>
        <Text style={styles.sendOver}>Send over</Text>
      </View>
      <Button
        title="Confirm"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isLoading}
      />
    </View>
  );
}
