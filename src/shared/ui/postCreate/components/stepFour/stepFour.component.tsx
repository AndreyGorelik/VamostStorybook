import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Divider from '@shared/ui/divider/divider.component';
import TextInput from '@shared/ui/input/input.component';
import { PackageCard } from '@shared/ui/packageCard';
import Text from '@shared/ui/text/text.component';
import { getImagePath } from '@shared/utils/getImagePath';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getPackages } from 'src/store/slices/postCreateSlice';

import { createStyles } from './stepFour.styles';
import { PackageListItem, StepFourProps } from './stepFour.types';

export default function StepFour({
  onSelect,
  next,
  changeTitle,
  changeHeaderImage,
  post,
  placeId,
  setFullPackageId,
}: StepFourProps) {
  const dispatch = useAppDispatch();
  const { postPackages, isLoading } = useAppSelector((state) => state.postCreateSlice);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const maxPeople = Object.values(post).reduce((acc, curr) => {
      if (typeof curr === 'number') {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);

    dispatch(
      getPackages({
        tags: post.tags,
        placeId: placeId,
        maxPeople,
      })
    );
  }, [dispatch, placeId, post]);

  const theme = useTheme();
  const styles = createStyles(theme);

  const filteredPackagesList = postPackages?.filter((item) => {
    if (item?.name?.toLowerCase().trim().includes(search.toLowerCase().trim())) return item;
  });

  const showFullPackage = (item: PackageListItem) => {
    setFullPackageId(item._id);
    changeTitle(item.name);
    item.avatar && changeHeaderImage(getImagePath(item.avatar));
    Keyboard.dismiss();
    onSelect(item._id);
    next();
  };

  if (isLoading) return <ActivityIndicator size={50} />;

  return (
    <View>
      <View style={styles.textInput}>
        <TextInput placeholder="Search..." value={search} onChangeText={setSearch} />
      </View>
      <ScrollView>
        {filteredPackagesList.length > 0 ? (
          filteredPackagesList?.map((item, index, array) => {
            const isLastElement = index === array.length - 1;

            return (
              <View key={item._id}>
                <PackageCard {...item} date={item.date} onPress={() => showFullPackage(item)} />
                {!isLastElement && <Divider />}
              </View>
            );
          })
        ) : (
          <Text>No suitable packages</Text>
        )}
      </ScrollView>
    </View>
  );
}
