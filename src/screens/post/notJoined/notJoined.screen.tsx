import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { Button } from '@shared/ui/button';
import Divider from '@shared/ui/divider/divider.component';
import { PageLoader } from '@shared/ui/pageLoader';
import Text from '@shared/ui/text/text.component';
import { UserPicGallery } from '@shared/ui/userpicGallery';
import Axios from 'axios';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { View, Image, ImageBackground, ScrollView, Alert, RefreshControl } from 'react-native';
import { sendRequest } from 'src/api/posts/sendRequest';
import { getPostAction, resetPost } from 'src/store/slices/post/post.slice';

import { createStyles } from './notJoined.styles';

export default function NotJoined() {
  const post = useAppSelector((state) => state.postsSlice.posts[0]);
  const { post: data, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const theme = useTheme();
  const styles = createStyles(theme);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function handleBack() {
    navigation.goBack();
  }

  const requestInvite = async () => {
    try {
      setIsLoading(true);
      await sendRequest({ id: post.id, type: post.hostType });
    } catch (err) {
      if (Axios.isAxiosError(err)) Alert.alert(err?.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  function refetchPost() {
    if (!data || !data.info) return;

    dispatch(resetPost());
    dispatch(getPostAction({ id: data.info.id as string }));
  }

  if (isPostLoading) return <PageLoader />;

  // if (error) return <Text>{error}</Text>;

  return (
    <ScrollView
      style={styles.scrollWrapper}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
    >
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={{
          uri: post.imageUrl,
        }}
        style={styles.photoContainer}
      >
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <Image
        source={{
          uri: post.host.avatar,
        }}
        style={styles.userPicture}
      />
      <View style={styles.postInfo}>
        <Text variant="h4">{post.venue}</Text>
        <View style={styles.mainInfo}>
          <Text>Hosted by: {post.hostType === 'Host' ? post.host.nickName : ''}</Text>
          <Button
            title={post.hostType === 'Host' ? 'Request' : 'Request to be host'}
            onPress={requestInvite}
            loading={isLoading}
          />
          <Text variant="disabled" fontSize={14}>
            {format(new Date(post.date), 'MMMM d, yyyy, h:mm a')}
          </Text>
          <Text>
            Guest(s):
            {post.guestWomenCount > 0 ? ' +' + post.guestWomenCount.toString() + ' Women' : ''}
            {post.guestMenCount > 0 ? ' +' + post.guestMenCount.toString() + ' Men' : ''}
            {post.guestOthersCount > 0 ? ' +' + post.guestOthersCount.toString() + ' Other' : ''}
          </Text>
          <UserPicGallery data={post.guests} size={60} />
        </View>

        <Divider />
        <View>
          <Text variant="h5">About {post.name}</Text>
          <Text>{post.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
