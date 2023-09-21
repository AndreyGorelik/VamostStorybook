import { useAppSelector, useAppDispatch } from '@shared/hooks/redux.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getPostAction } from 'src/store/slices/post/post.slice';
import * as SecureStore from 'expo-secure-store';

export default function Index() {
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const [userId, setUserId] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) dispatch(getPostAction({ id: id as string }));

    async function getUserId() {
      const userId = await SecureStore.getItemAsync('userId');
      setUserId(userId);
    }

    getUserId();
  }, [dispatch, id]);

  if (isPostLoading) return <PageLoader />;
  return <Redirect href="posts/post/not-joined" />;

  if (error) {
    return <Text>{error}</Text>;
  }

  if (post?.isUsersPost && post.info?.host.id === userId) {
    return <Redirect href="posts/post/host" />;
  }

  if (post?.isUsersPost && post.info?.guests.filter((item) => item.id === userId).length) {
    return <Redirect href="posts/post/guest" />;
  }

}
