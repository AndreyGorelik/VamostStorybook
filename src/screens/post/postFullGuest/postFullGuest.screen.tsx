import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { Button } from '@shared/ui/button';
import Divider from '@shared/ui/divider/divider.component';
import { PageLoader } from '@shared/ui/pageLoader';
import Text from '@shared/ui/text/text.component';
import { UserPicGallery } from '@shared/ui/userpicGallery';
import { getImagePath } from '@shared/utils/getImagePath';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { View, Image, ImageBackground, ScrollView, Alert } from 'react-native';

import { createStyles } from './postFullGuest.styles';

export default function PostFullGuest() {
  const { post, isPostLoading } = useAppSelector((state) => state.postSlice);
  const theme = useTheme();
  const styles = createStyles(theme);
  const requestInvite = () => {
    Alert.alert('confirm');
  };
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  if (isPostLoading) return <PageLoader />;

  return (
    <ScrollView style={styles.scrollWrapper}>
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={{
          uri: post?.info?.images[0] && getImagePath(post.info.images[0]),
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
          uri: post?.info?.owner.avatar && getImagePath(post.info.owner.avatar),
        }}
        style={styles.userPicture}
      />
      <View style={styles.postInfo}>
        <Text variant="h4">TODO: {post?.info?.location}</Text>
        <Text>Hosted by: {post?.info?.owner.nickName}</Text>
        <Button title="Request" onPress={requestInvite} />
        <Text variant="disabled" fontSize={14}>
          {post?.info?.date && format(new Date(post.info.date), 'MMMM d, yyyy, h:mm a')}
        </Text>
        <Text>
          Guest(s):
          {post?.info?.guestWomenCount && post.info.guestWomenCount > 0
            ? ' +' + post?.info?.guestWomenCount.toString() + ' Women'
            : ''}
          {post?.info?.guestMenCount && post.info.guestMenCount > 0
            ? ' +' + post?.info?.guestMenCount.toString() + ' Men'
            : ''}
          {post?.info?.guestOthersCount && post.info.guestOthersCount > 0
            ? ' +' + post.info.guestOthersCount.toString() + ' Other'
            : ''}
        </Text>
        {post?.info?.guests && <UserPicGallery data={post.info.guests} size={60} />}
        <Divider />
        <Text variant="h5">About {post?.info?.name}</Text>
        <Text>{post?.info?.description}</Text>
      </View>
    </ScrollView>
  );
}
