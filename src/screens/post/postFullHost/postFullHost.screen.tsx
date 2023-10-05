import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { OutlinedButton } from '@shared/ui/outlinedBtn';
import { PageLoader } from '@shared/ui/pageLoader';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, ScrollView, Alert, RefreshControl } from 'react-native';
import { getPostAction, resetPost, updatePostStatus } from 'src/store/slices/post/post.slice';

import { Guests } from './components/Guests';
import { Header } from './components/Header';
import { Requests } from './components/Requests';
import { Tags } from './components/Tags';
import { createStyles } from './postFullHost.styles';

export default function PostFullHost() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { post, isPostLoading } = useAppSelector((state) => state.postSlice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const actionBtns = [
    {
      title: 'Confirm & Lock',
      color: theme.colors.postStatus.confirmed,
      disabled: Boolean(post?.info?.guests?.length && post.info.guests.length < 2),
      onPress: () => {
        confirmPost();
        refetchPost();
      },
    },
    {
      title: 'Change',
      color: theme.colors.postStatus.created,
      onPress: changePost,
    },
    {
      title: 'Cancel',
      color: theme.colors.postStatus.canceled,
      onPress: () => {
        cancelPost();
        refetchPost();
      },
    },
  ];

  useEffect(() => {
    return () => {
      dispatch(resetPost());
    };
  }, [dispatch]);

  function refetchPost() {
    if (!post || !post.info) return;
    dispatch(resetPost());
    dispatch(getPostAction({ id: post.info._id as string }));
  }

  function handleBack() {
    navigation.goBack();
  }

  function confirmPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info._id,
        postStatus: 'Active',
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
        id: post?.info._id,
        postStatus: 'Cancelled',
      })
    );
  }

  if (isPostLoading || !(post && post.info)) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollWrapper}
      style={styles.wrapper}
      bounces={true}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
    >
      <Header postInfo={post.info} />
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <View style={styles.postInfo}>
        <Tags tags={post.info.tags} />
        <Guests postInfo={post.info} />

        {post.info.postStatus === 'New' && (
          <>
            <View style={styles.actionButtons}>
              {actionBtns.map((button) => (
                <OutlinedButton key={button.title} {...button} {...styles.actionBtn} />
              ))}
            </View>
            <Requests postId={post.info._id} />
          </>
        )}
      </View>
    </ScrollView>
  );
}
