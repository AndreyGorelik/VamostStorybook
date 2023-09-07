import { MaterialIcons } from '@expo/vector-icons';
import { useSelectCity } from '@shared/hooks/useSelectCity.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Input } from '@shared/ui/input';
import { SelectList } from '@shared/ui/selectList';
import { useState } from 'react';
import { View, ScrollView, Pressable, Modal } from 'react-native';

import FixedParam from './components/fixedParam.component';
import { createStyles } from './selectCity.styles';
import { SelectCityProps } from './selectCity.types';

export default function SelectCity({ open, setOpen, setCity }: SelectCityProps) {
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const { items, setItem, info, setInfo } = useSelectCity(query, setCity, setOpen);

  function handleSelect(value: string) {
    setQuery('');
    setItem(value);
  }

  function handlePress() {
    setOpen(false);
    setInfo({
      ...info,
      state: '',
      country: '',
    });
  }

  return (
    <>
      <Modal visible={open} animationType="slide">
        <View style={styles.wrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.close,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
            onPress={handlePress}
          >
            <MaterialIcons name="close" size={24} />
          </Pressable>
          <View style={styles.input}>
            <Input
              value={query}
              onChangeText={setQuery}
              placeholder={`Enter ${info.state ? 'city' : info.country ? 'state' : 'country'}`}
            />
          </View>
          <View style={styles.underInput}>
            {info.country && (
              <FixedParam
                name={info.countryLabel}
                onPress={() => {
                  setInfo({ ...info, country: '', state: '' });
                }}
              />
            )}
            {info.state && (
              <FixedParam
                name={info.stateLabel}
                onPress={() => {
                  setInfo({ ...info, state: '' });
                }}
              />
            )}
          </View>
          <ScrollView style={styles.listWrapper}>
            <SelectList
              listOptions={items}
              selected={info.city}
              setSelected={handleSelect}
              variant="buttonsList"
            />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
