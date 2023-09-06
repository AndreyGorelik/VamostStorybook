import { useAppSelector } from '@shared/hooks/redux.hook';
import Text from '@shared/ui/text/text.component';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';

import { InfoRow } from '../infoRow';

import { createStyles } from './personalInfo.styles';
import { PersonalInfoValues } from './personalInfo.types';

export default function PersonalInfo() {
  const styles = createStyles();
  const { email, nickname, birthdate, gender, phoneNumber, sexualOrientation, shownGender } =
    useAppSelector((state) => state.userSlice);

  const { control } = useForm<PersonalInfoValues>({
    defaultValues: {
      birthdate,
      gender: gender.value,
      phoneNumber,
      sexualOrientation: sexualOrientation.value,
      nickname,
      email,
      shownGender,
    },
  });

  return (
    <View>
      <View style={styles.header}>
        <Text variant="h3">Personal info</Text>
      </View>
      <Controller
        control={control}
        name="birthdate"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Birthday"
            value={value}
            onChangeText={onChange}
            editable={false}
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
            value={`${value}`}
            onChangeText={onChange}
            editable={false}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Phone"
            value={value}
            onChangeText={onChange}
            editable={false}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="sexualOrientation"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Orientation"
            value={`${value}`}
            onChangeText={onChange}
            editable={false}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="nickname"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Nickname"
            value={value}
            onChangeText={onChange}
            editable={false}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Email"
            value={value}
            onChangeText={onChange}
            editable={false}
            onBlur={onBlur}
          />
        )}
      />
    </View>
  );
}
