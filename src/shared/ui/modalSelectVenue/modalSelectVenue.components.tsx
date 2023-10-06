import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
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
    setPlaceId(item._id);
    setVenue(item.name);
    setOpen(false);
  };

  const renderVenue = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => chooseVenue(item)}>
        <Text variant="h4">{item.name}</Text>
        {item.avatar && (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: getImagePath(item.avatar),
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  if (!open) return null;

  return (
    <Modal animationType="fade">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <View style={styles.close}>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
              ]}
              onPress={() => setOpen(false)}
            >
              <MaterialIcons name="close" size={24} />
            </Pressable>
          </View>
          {isLoading ? <ActivityIndicator size="large" color={theme.colors.primary} /> : null}
          {postVenues.length === 0 && <Text>There are no venues meeting your criteria</Text>}
          <FlatList data={postVenues} renderItem={renderVenue} keyExtractor={(item) => item._id} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ModalSelectVenue;
