import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppSelector, useAppDispatch } from '@shared/hooks/redux.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Redirect, useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useState } from 'react';
import { getPostAction } from 'src/store/slices/post/post.slice';

export default function Index() {
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const [userId, setUserId] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams();

  const handleFetch = useCallback(
    (id: string) => {
      dispatch(getPostAction({ id: id as string }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) handleFetch(id as string);

    async function getUserId() {
      const userId = await SecureStore.getItemAsync('userId');
      setUserId(userId);
    }

    getUserId();
  }, [dispatch, handleFetch, id]);

  if (isPostLoading || !userId) return <PageLoader />;

  if (error) {
    return <ErrorPage error={error} retry={async () => handleFetch(id as string)} />;
  }

  if (post?.isUsersPost) {
    return <Redirect href="posts/post/host" />;
  }

  if (post?.info?.members.find((member) => member._id === userId)) {
    return <Redirect href="posts/post/guest" />;
  }

  return <Redirect href="posts/post/not-joined" />;
}
