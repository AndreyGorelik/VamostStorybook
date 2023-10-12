import Background from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import PhotoGallery from '@shared/ui/photoGallery/photoGallery.component';
import PostCreate from '@shared/ui/postCreate/postCreate.component';
import Text from '@shared/ui/text/text.component';
import { removeTokens } from '@shared/utils/removeTokens';
import Constants from 'expo-constants';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  ActivityIndicatorComponent,
  Share,
} from 'react-native';
import { logoutUser } from 'src/store/slices/auth.slice';
import { initialState, setUser } from 'src/store/slices/user.slice';

import { posts } from './account.data';
import { createStyles } from './account.styles';
import AddImage from './components/addImage/addImage.component';
import ControlButtons from './components/controlButtons/controlButtons';
import { PersonalInfo } from './components/personalInfo';
import { RecentMeetup } from './components/recentMeetup';

export default function Account() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [editMode, setEditMode] = useState(false);
  const { email, nickname, images, avatar, photoError, id } = useAppSelector(
    (state) => state.userSlice
  );
  const dispatch = useAppDispatch();
  const [openPostCreate, setOpenPostCreate] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const shareProfileLink = async () => {
    const ip = Constants.linkingUri.split('//')[1].split(':')[0];
    await Share.share({
      message: `exp://${ip}:8081/--/profilefull/${id}`,
    });
  };

  const watchRequests = () => {
    return;
  };

  const addNewPost = () => {
    setOpenPostCreate(true);
  };

  const editPersonalInfo = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.wrapper}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={Background}
          imageStyle={styles.imageBackground}
          style={styles.imageWrapper}
        >
          <View style={styles.linearGradient}></View>
          <View style={styles.userInfo}>
            <Image source={{ uri: avatar }} style={styles.image} />
            <Text variant="h3" {...styles.text} style={styles.nickname}>
              {nickname}
            </Text>
            <Text variant="common" {...styles.text}>
              {email?.toLowerCase()}
            </Text>
          </View>
        </ImageBackground>
        <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />
        <HeaderButton
          onPress={() => {
            dispatch(logoutUser());
            dispatch(setUser(initialState));
            removeTokens();
          }}
          icon={'logout'}
          isBackground={true}
          variant="right"
        />

        <View style={styles.userContent}>
          <ControlButtons
            edit={editPersonalInfo}
            addNew={addNewPost}
            watchRequests={watchRequests}
            share={shareProfileLink}
            editMode={editMode}
          />

          <PersonalInfo editMode={editMode} setEditMode={setEditMode} />

          <View style={styles.photoContainer}>
            <Text variant="h3">Photos</Text>
            <PhotoGallery images={images} />
            {photoError && <Text variant="warning">{photoError}</Text>}
            <AddImage />
          </View>
        </View>
      </ScrollView>

      <PostCreate open={openPostCreate} setOpen={setOpenPostCreate} />
    </>
  );
}
