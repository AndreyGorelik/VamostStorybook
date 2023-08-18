import { FlatList, View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import { dateConvert } from '../../utils/dateConvert';

import PackageCard from './packageCard.component';
import { data } from './packageCard.data';

export default {
  title: 'PackageCard',
  component: PackageCard,
};

const Template = () => {
  const theme = useTheme();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <PackageCard {...item} date={dateConvert(item.date).convertedDate} />
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: theme.colors.imagePlaceholder }} />
      )}
    />
  );
};

export const Default = Template.bind({});
