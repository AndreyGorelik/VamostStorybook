import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import { createStyles } from './personalInfo.styles';
import { useAppSelector } from '@shared/hooks/redux.hook';
import { Input } from '@shared/ui/input';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InfoRow } from '../infoRow';
import Text from '@shared/ui/text/text.component';

export default function PersonalInfo() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { email, nickname, birthdate, gender, phoneNumber, sexualOrientation } = useAppSelector(
    (state) => state.userSlice
  );
  const [editable, setEditable] = useState<boolean>(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      birthdate,
      gender,
      phoneNumber,
      sexualOrientation,
    },
  });
  return (
    <View>
      <Text variant="h3">Personal info</Text>
      <Controller
        control={control}
        name="birthdate"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Birthday"
            value={value}
            onChangeText={onChange}
            editable={editable}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Gender"
            value={`${value.value}`}
            onChangeText={onChange}
            editable={editable}
            onBlur={onBlur}
          />
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text variant="medium" width={130}>
          Gender:
        </Text>
        <Input value={`${gender.value}`} editable={false} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text variant="medium" width={130}>
          Phone:
        </Text>
        <Input value={phoneNumber} editable={false} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text variant="medium" width={130}>
          Orientation:
        </Text>
        <Input value={`${sexualOrientation.value}`} editable={false} />
      </View>
    </View>
  );
}
