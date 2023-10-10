import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { Button } from '@shared/ui/button';
import Divider from '@shared/ui/divider/divider.component';
import { PageLoader } from '@shared/ui/pageLoader';
import Text from '@shared/ui/text/text.component';
import { UserPicGallery } from '@shared/ui/userpicGallery';
import { AvatarPlaceholder } from '@shared/ui/userpicGallery/components/avatarPlaceholder';
import { getImagePath } from '@shared/utils/getImagePath';
import Axios from 'axios';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { View, ImageBackground, ScrollView, Alert, RefreshControl, Pressable } from 'react-native';
import { sendRequest } from 'src/api/posts/sendRequest';
import { getPostAction, resetPost } from 'src/store/slices/post/post.slice';

import { createStyles } from './notJoined.styles';

const AVATAR_SIZE = 60;

export default function NotJoined() {
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const { pendingRequests } = useAppSelector((state) => state.pendingRequestsSlice);
  const [disabled, setDisabled] = useState<boolean>(true);
  const theme = useTheme();
  const styles = createStyles(theme, AVATAR_SIZE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function getUserId() {
      const userId = await SecureStore.getItemAsync('userId');
      if (pendingRequests.find((request) => request.user._id === userId)) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }

    getUserId();
  }, [pendingRequests]);

  const requestInvite = async () => {
    if (!post?.info) return;

    try {
      setIsLoading(true);
      await sendRequest({ id: post.info._id, type: post.info.hostType });
      setDisabled(true);
    } catch (err) {
      if (Axios.isAxiosError(err)) Alert.alert(err?.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  function refetchPost() {
    if (!post?.info) return;

    dispatch(resetPost());
    dispatch(getPostAction({ id: post.info._id as string }));
  }

  if (isPostLoading) return <PageLoader />;

  if (error) return <ErrorPage retry={async () => refetchPost()} error={error} />;

  if (!post?.info) {
    return <ErrorPage retry={async () => refetchPost()} error="Nothing found" />;
  }

  return (
    <ScrollView
      style={styles.scrollWrapper}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
      contentContainerStyle={styles.scrollContent}
    >
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={{
          uri: post.info.images[0] && getImagePath(post.info.images[0]),
        }}
        style={styles.photoContainer}
      >
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <AvatarPlaceholder
        item={post.info.owner}
        size={70}
        style={styles.userPicture}
        imageStyle={styles.userPicture}
      />

      <View style={styles.postInfo}>
        <Text variant="h4">{post.info.location}</Text>
        <View style={styles.mainInfo}>
          <Text>Hosted by: {post.info.hostType === 'Host' ? post.info.owner.nickName : ''}</Text>
          <Button
            title={post.info.hostType === 'Host' ? 'Request' : 'Request to be host'}
            onPress={requestInvite}
            loading={isLoading}
            disabled={disabled}
          />
          <Text variant="disabled" fontSize={14}>
            {post.info.date && format(new Date(post.info.date), 'MMMM d, yyyy, h:mm a')}
          </Text>
          <Text>
            Guest(s):
            {post.info.guestWomenCount && post.info.guestWomenCount > 0
              ? ' +' + post.info.guestWomenCount.toString() + ' Women'
              : ''}
            {post.info.guestMenCount > 0 ? ' +' + post.info.guestMenCount.toString() + ' Men' : ''}
            {post.info.guestOthersCount > 0
              ? ' +' + post.info.guestOthersCount.toString() + ' Other'
              : ''}
          </Text>
          {post.info.members && (
            <View style={styles.guests}>
              <UserPicGallery data={post.info.members.slice(0, 3)} size={AVATAR_SIZE} />
              {post.info.members.length > 3 && (
                <Pressable style={styles.more}>
                  <Text variant="h3" style={{ color: theme.colors.secondary }}>
                    +{`${post.info.members.length - 3}`}
                  </Text>
                </Pressable>
              )}
            </View>
          )}
        </View>

        <Divider />
        <View>
          <Text variant="h5">About {post.info.name}</Text>
          <Text>{post.info.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
