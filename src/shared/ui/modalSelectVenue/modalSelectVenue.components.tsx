import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { getVenues } from 'src/store/slices/postCreateSlice';
import { Place } from 'src/types/actions/actions.types';

import Text from '../text/text.component';

import { createStyles } from './modalSelectVenue.styles';

function ModalSelectVenue({
  location,
  open,
  setOpen,
  setVenue,
  setPlaceId,
}: {
  location: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVenue: React.Dispatch<React.SetStateAction<string>>;
  setPlaceId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch = useAppDispatch();
  const { postVenues, isLoading } = useAppSelector((state) => state.postCreateSlice);

  const theme = useTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    dispatch(getVenues(location));
  }, [location, dispatch]);

  const chooseVenue = (item: Place) => {
    setPlaceId(item.id);
    setVenue(item.name);
    setOpen(false);
  };

  const renderVenue = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => chooseVenue(item)}>
        <Text variant="h4">{item.name}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: item.imageUrl,
          }}
        />
      </TouchableOpacity>
    );
  };

  if (!open) return null;

  return (
    <Modal animationType="fade">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          {isLoading ? <ActivityIndicator size="large" color={theme.colors.primary} /> : null}
          {postVenues.length === 0 && <Text>There are no venues meeting your criteria</Text>}
          <FlatList data={postVenues} renderItem={renderVenue} keyExtractor={(item) => item.id} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ModalSelectVenue;
