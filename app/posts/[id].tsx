import { useAppSelector, useAppDispatch } from '@shared/hooks/redux.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { getPostAction } from 'src/store/slices/post/post.slice';

export default function Index() {
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);

  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) dispatch(getPostAction({ id: id as string }));
  }, [dispatch, id]);

  if (isPostLoading) return <PageLoader />;

  if (error) {
    return <Text>{error}</Text>;
  }

  if (post?.isUsersPost && post.info?.hostType === 'Host') {
    return <Redirect href="posts/post/host" />;
  }

  if (post?.isUsersPost && post?.info?.hostType === 'Guest') {
    return <Redirect href="posts/post/guest" />;
  }

  return <Redirect href="/home" />;
}
