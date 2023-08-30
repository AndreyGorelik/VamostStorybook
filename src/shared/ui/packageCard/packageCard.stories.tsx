import useTheme from '@shared/hooks/useTheme.hook';
import { format } from 'date-fns';
import { FlatList, View } from 'react-native';

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
        <PackageCard {...item} date={format(new Date(item.date), 'EEEE MMM d')} />
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: theme.colors.imagePlaceholder }} />
      )}
    />
  );
};

export const Default = Template.bind({});
