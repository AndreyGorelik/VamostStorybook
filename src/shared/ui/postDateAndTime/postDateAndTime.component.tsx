import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import convertDateToHumanFormat from '../../../utils/convertTime/convertDateToHumanFormat';
import convertTime from '../../../utils/convertTime/convertTime';
import Text from '../text/text.component';

import { PostDateAndTimeProps } from './postDateAndTime.types';

export default function PostDateAndTime({ date, setDate }: PostDateAndTimeProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDate = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmTime = (date: Date) => {
    setDate(date);
    hideTimePicker();
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateField}>
        <FontAwesome name="calendar-check-o" size={14} color="black" />
        <Text>{convertDateToHumanFormat(date)}</Text>
      </TouchableOpacity>
      <Text>at</Text>
      <TouchableOpacity onPress={showTimePicker} style={styles.dateField}>
        <Text>{convertTime(date)}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={date}
        mode="date"
        onConfirm={confirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        date={date}
        mode="time"
        onConfirm={confirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  tagButton: {
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: 'black',
  },
  dateField: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
});
