import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';
import { getProfile } from 'src/store/slices/profileSlice';

import { createStyles } from './profileFull.styles';

export default function ProfileFull() {
  const params = useLocalSearchParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const { profile, isLoading, error } = useAppSelector((state) => state.profileSlice);

  useEffect(() => {
    dispatch(getProfile(id as string));
  }, [dispatch, id]);

  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) return <ActivityIndicator size={50} />;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={styles.wrapper}>
      <Image source={{ uri: profile.avatar }} style={styles.headerPhoto} resizeMode="cover" />
      <View>
        <Text variant="h3" align="center">
          {profile.nickName}
        </Text>
        <Text variant="h3" align="center">
          {profile.shownGender}
        </Text>
      </View>
    </ScrollView>
  );
}
