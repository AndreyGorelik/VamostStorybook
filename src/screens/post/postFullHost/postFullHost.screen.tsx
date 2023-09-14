import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { OutlinedButton } from '@shared/ui/outlinedBtn';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useNavigation } from 'expo-router';
import { View, ScrollView, Alert } from 'react-native';
import { updatePostStatus } from 'src/store/slices/postsSlice';

import { Guests } from './components/Guests';
import { Header } from './components/Header';
import { Tags } from './components/Tags';
import { POST_FULL_HOST_DATA } from './postFullHost.data';
import { createStyles } from './postFullHost.styles';
import { RequestProps } from './postFullHost.types';

export default function PostFullHost() {
  const data = POST_FULL_HOST_DATA;
  const theme = useTheme();
  const styles = createStyles(theme);
  const { post, isLoading } = useAppSelector((state) => state.postsSlice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const actionBtns = [
    {
      title: 'Confirm & Lock',
      color: theme.colors.postStatus.confirmed,
      onPress: confirmPost,
    },
    {
      title: 'Change',
      color: theme.colors.postStatus.created,
      onPress: changePost,
    },
    {
      title: 'Cancel',
      color: theme.colors.postStatus.canceled,
      onPress: cancelPost,
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function confirmPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info.id,
        postStatus: 'Confirmed',
      })
    );
  }
  function changePost() {
    Alert.alert('change');
  }
  function cancelPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info.id,
        postStatus: 'Cancelled',
      })
    );
  }
  function confirmRequest() {
    Alert.alert('confirm');
  }
  function deleteRequest() {
    Alert.alert('delete');
  }

  if (isLoading || !(post && post.info)) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollWrapper}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <Header postInfo={post.info} />
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <View style={styles.postInfo}>
        <Tags tags={post.info.tags} />
        <Guests postInfo={post.info} />

        <View style={styles.actionButtons}>
          {actionBtns.map((button) => (
            <OutlinedButton key={button.title} {...button} {...styles.actionBtn} />
          ))}
        </View>

        <View style={styles.requestsList}>
          {data.requests.map((item: RequestProps) => {
            return (
              <Request
                key={item.id}
                data={item}
                confirmRequest={confirmRequest}
                deleteRequest={deleteRequest}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
