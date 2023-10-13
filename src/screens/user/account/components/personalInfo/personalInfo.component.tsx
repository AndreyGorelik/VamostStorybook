import { GENDER_OPTIONS } from '@screens/auth/register/components/steps/gender/gender.data';
import { ORIENTATION_OPTIONS } from '@screens/auth/register/components/steps/orientation/orientation.data';
import { ORIENTATION_RADIO_DATA } from '@screens/auth/register/components/steps/showMe/showMe.data';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { Button } from '@shared/ui/button';
import { CheckBox } from '@shared/ui/checkBox';
import ModalWithChildren from '@shared/ui/modalWithChildren/modalWithChildren.component';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { format, subYears } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { updatePersonalInfo } from 'src/store/slices/user.slice';

import { InfoRow } from '../infoRow';

import { createStyles } from './personalInfo.styles';
import { PersonalInfoProps, PersonalInfoValues } from './personalInfo.types';

export default function PersonalInfo({ editMode, setEditMode }: PersonalInfoProps) {
  const dispatch = useAppDispatch();
  const styles = createStyles();
  const {
    email,
    nickname,
    birthdate,
    gender,
    phoneNumber,
    sexualOrientation,
    shownGender,
    savingEditedInfo,
    savingEditedInfoError,
  } = useAppSelector((state) => state.userSlice);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [orientationModal, setOrientationModal] = useState(false);
  const [showMeModal, setShowMeModal] = useState(false);

  const formValues = useMemo(
    () => ({
      birthdate,
      gender: {
        value: gender?.value,
        isShown: gender?.isShown,
      },
      sexualOrientation: {
        value: sexualOrientation?.value,
        isShown: sexualOrientation?.isShown,
      },
      nickname,
      email,
      shownGender,
    }),
    [
      birthdate,
      gender?.value,
      gender?.isShown,
      sexualOrientation?.value,
      sexualOrientation?.isShown,
      nickname,
      email,
      shownGender,
    ]
  );

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<PersonalInfoValues>({
    defaultValues: formValues,
  });

  useEffect(() => {
    if (!editMode) reset(formValues);
  }, [editMode, formValues, reset]);

  useEffect(() => {
    const actualFormValues = watch();
    if (JSON.stringify(actualFormValues) === JSON.stringify(formValues)) {
      setEditMode(false);
    }
  }, [formValues, setEditMode, watch]);

  const save = (data: PersonalInfoValues) => {
    const actualFormValues = watch();
    if (JSON.stringify(actualFormValues) === JSON.stringify(formValues)) {
      setEditMode(false);
      return;
    }
    dispatch(updatePersonalInfo(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3">Personal info</Text>
      </View>

      <InfoRow title="Phone" value={phoneNumber} editable={false} input={false} />

      <Controller
        control={control}
        name="nickname"
        rules={{
          required: 'This is required',
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Nickname"
            value={value}
            onChangeText={onChange}
            editable={editMode}
            onBlur={onBlur}
            input={editMode ? true : false}
          />
        )}
      />
      {errors.nickname && <Text variant="warning">{errors.nickname?.message}</Text>}

      <Controller
        control={control}
        name="birthdate"
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  if (editMode) setDatePickerVisible(true);
                }}
                disabled={!editMode}
              >
                <InfoRow
                  title="Birthday"
                  value={value}
                  onChangeText={onChange}
                  editable={false}
                  input={false}
                />
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={datePickerVisible}
                date={new Date()}
                mode="date"
                maximumDate={subYears(new Date(), 18)}
                onConfirm={(date: Date) => {
                  setDatePickerVisible(false);
                  onChange(format(date, 'yyyy/dd/MM'));
                }}
                onCancel={() => setDatePickerVisible(false)}
              />
            </>
          );
        }}
      />
      {errors.birthdate && <Text variant="warning">{errors.birthdate?.message}</Text>}

      <Controller
        control={control}
        name="gender.value"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <>
              <TouchableOpacity onPress={() => setGenderModal(true)} disabled={!editMode}>
                <InfoRow
                  title="Gender"
                  value={`${value}`}
                  onChangeText={onChange}
                  editable={false}
                  onBlur={onBlur}
                  input={false}
                />
              </TouchableOpacity>

              <ModalWithChildren visible={genderModal} setVisible={setGenderModal}>
                <SelectList
                  listOptions={GENDER_OPTIONS}
                  variant="textList"
                  selected={value ?? ''}
                  setSelected={(gender: string) => {
                    setGenderModal(false);
                    onChange(gender);
                  }}
                />
              </ModalWithChildren>
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="sexualOrientation.value"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <TouchableOpacity onPress={() => setOrientationModal(true)} disabled={!editMode}>
              <InfoRow
                title="Orientation"
                value={`${value}`}
                onChangeText={onChange}
                editable={false}
                onBlur={onBlur}
                input={false}
              />

              <ModalWithChildren visible={orientationModal} setVisible={setOrientationModal}>
                <SelectList
                  listOptions={ORIENTATION_OPTIONS}
                  variant="textList"
                  selected={value ?? ''}
                  setSelected={(gender: string) => {
                    setOrientationModal(false);
                    onChange(gender);
                  }}
                />
              </ModalWithChildren>
            </TouchableOpacity>
          );
        }}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'This is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <InfoRow
            title="Email"
            value={value}
            onChangeText={onChange}
            editable={editMode}
            onBlur={onBlur}
            input={editMode ? true : false}
          />
        )}
      />
      {errors.email && <Text variant="warning">{errors.email?.message}</Text>}

      <Controller
        control={control}
        name="shownGender"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <TouchableOpacity onPress={() => setShowMeModal(true)} disabled={!editMode}>
              <InfoRow
                title="Show me"
                value={`${value}`}
                onChangeText={onChange}
                editable={false}
                onBlur={onBlur}
                input={false}
              />

              <ModalWithChildren visible={showMeModal} setVisible={setShowMeModal}>
                <SelectList
                  listOptions={ORIENTATION_RADIO_DATA}
                  variant="textList"
                  selected={value ?? ''}
                  setSelected={(gender: string) => {
                    setShowMeModal(false);
                    onChange(gender);
                  }}
                />
              </ModalWithChildren>
            </TouchableOpacity>
          );
        }}
      />

      <Controller
        control={control}
        name="sexualOrientation.isShown"
        render={({ field: { onChange, value } }) => (
          <CheckBox
            label="Show orientation on my page"
            value={value}
            onChange={onChange}
            disabled={!editMode}
          />
        )}
      />

      <Controller
        control={control}
        name="gender.isShown"
        render={({ field: { onChange, value } }) => (
          <CheckBox
            label="Show gender on my page"
            value={value}
            onChange={onChange}
            disabled={!editMode}
          />
        )}
      />

      {savingEditedInfoError && <Text variant="warning">{savingEditedInfoError}</Text>}
      {editMode && <Button title="Save" onPress={handleSubmit(save)} loading={savingEditedInfo} />}
    </View>
  );
}
