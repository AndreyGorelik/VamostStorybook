import Background from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import PhotoGallery from '@shared/ui/photoGallery/photoGallery.component';
import Text from '@shared/ui/text/text.component';
import { getImagePath } from '@shared/utils/getImagePath';
import Constants from 'expo-constants';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Share, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getProfile } from 'src/store/slices/profileSlice';

import { createStyles } from './profileFull.styles';

export default function ProfileFull() {
  const params = useLocalSearchParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const { profile, isLoading, error } = useAppSelector((state) => state.profileSlice);

  const fetchProfile = useCallback(
    (id: string) => {
      dispatch(getProfile(id as string));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchProfile(id as string);
  }, [fetchProfile, id]);

  const theme = useTheme();
  const styles = createStyles(theme);

  const shareProfileLink = async () => {
    const ip = Constants.linkingUri.split('//')[1].split(':')[0];
    await Share.share({
      message: `exp://${ip}:8081/--/profilefull/${id}`,
    });
  };

  if (isLoading) return <PageLoader />;
  if (error)
    return (
      <ErrorPage error={error} retry={async () => fetchProfile(id as string)} backButton={false} />
    );

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
            <Image source={{ uri: getImagePath(profile.avatar) }} style={styles.image} />
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
        {profile?.sexualOrientation?.isShown && (
          <View style={styles.infoRow}>
            <Text variant="h5">Sexual orientation</Text>
            <Text>{profile?.sexualOrientation.value}</Text>
          </View>
        )}
        {profile?.gender?.isShown && (
          <View style={styles.infoRow}>
            <Text variant="h5">Gender</Text>
            <Text>{profile?.gender.value}</Text>
          </View>
        )}
        <PhotoGallery images={profile.images} />
      </View>
    </ScrollView>
  );
}
