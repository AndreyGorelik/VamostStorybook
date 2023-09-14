import { useAppSelector, useAppDispatch } from '@shared/hooks/redux.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { getPost } from 'src/store/slices/postsSlice';

export default function Index() {
  const { post, isLoading } = useAppSelector((state) => state.postsSlice);

  const host = true;

  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) dispatch(getPost({ id: id as string }));
  }, [dispatch, id]);

  if (isLoading) return <PageLoader />;

  if (post?.isUsersPost && host) {
    return <Redirect href="posts/post/host" />;
  }

  if (post?.isUsersPost && !host) {
    return <Redirect href="posts/post/host" />;
  }

  return <Redirect href="/home" />;
}
