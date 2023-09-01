import Divider from '@shared/ui/divider/divider.component';
import TextInput from '@shared/ui/input/input.component';
import { PackageCard } from '@shared/ui/packageCard';
import { format } from 'date-fns';
import { useState } from 'react';
import { Keyboard, View } from 'react-native';

import { PACKAGE_CARD_MOCK } from './stepFour.data';
import { PackageListItem, StepFourProps } from './stepOne.types';

export default function StepFour({ onSelect, next, changeTitle }: StepFourProps) {
  const [search, setSearch] = useState('');

  const filteredPackagesList = PACKAGE_CARD_MOCK.filter((item) => {
    if (item.title.toLowerCase().trim().includes(search.toLowerCase().trim())) return item;
  });

  const showFullPackage = (item: PackageListItem) => {
    changeTitle(item.title);
    Keyboard.dismiss();
    onSelect(item.id);
    next();
  };

  return (
    <>
      <TextInput placeholder="Search..." value={search} onChangeText={setSearch} />
      {filteredPackagesList.map((item, index, array) => {
        const isLastElement = index === array.length - 1;
        return (
          <View key={item.id}>
            <PackageCard
              {...item}
              date={format(new Date(item.date), 'EEEE MMM d')}
              onPress={() => showFullPackage(item)}
            />
            {!isLastElement && <Divider />}
          </View>
        );
      })}
    </>
  );
}
