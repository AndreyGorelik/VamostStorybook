import Background from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import PhotoGallery from '@shared/ui/photoGallery/photoGallery.component';
import Text from '@shared/ui/text/text.component';
import Constants from 'expo-constants';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground, ScrollView, Share, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getProfile } from 'src/store/slices/profileSlice';

import { createStyles } from './profileFull.styles';
const DATA = [
  {
    id: '1',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '2',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '3',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '4',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '5',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '6',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '7',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '8',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
  {
    id: '9',
    imageUrl:
      'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg',
  },
];
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

  const shareProfileLink = async () => {
    const ip = Constants.linkingUri.split('//')[1].split(':')[0];
    await Share.share({
      message: `exp://${ip}:8081/--/profilefull/${id}`,
    });
  };

  if (isLoading) return <ActivityIndicator size={50} />;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground
        source={Background}
        imageStyle={styles.imageBackground}
        style={styles.imageWrapper}
      >
        <View style={styles.linearGradient} />
        <View style={styles.userInfo}>
          {profile.avatar ? (
            <Image source={{ uri: profile.avatar }} style={styles.image} />
          ) : (
            <Ionicons name="person-circle" size={60} />
          )}

          <Text variant="h3" {...styles.text} style={styles.nickname}>
            {profile.nickName}
          </Text>
        </View>

        <View style={styles.shareBtn}>
          <TouchableOpacity onPress={shareProfileLink}>
            <MaterialIcons size={26} name="share" color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.userContent}>
        <View style={styles.infoRow}>
          <Text variant="h5">Birthdate</Text>
          <Text>{profile.birthdate}</Text>
        </View>
        {/* {JSON.parse(profile?.sexualOrientation?.toString()).isShown && (
          <View style={styles.infoRow}>
            <Text variant="h5">Sexual orientation</Text>
            <Text>{JSON.parse(profile?.sexualOrientation.toString()).value}</Text>
          </View>
        )}
        {JSON.parse(profile?.gender?.toString()).isShown && (
          <View style={styles.infoRow}>
            <Text variant="h5">Gender</Text>
            <Text>{JSON.parse(profile?.gender.toString()).value}</Text>
          </View>
        )} */}
        <PhotoGallery images={DATA} />
      </View>
    </ScrollView>
  );
}
