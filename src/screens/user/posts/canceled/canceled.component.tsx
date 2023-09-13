import { useAppSelector, useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import PostsList from '@shared/ui/postsList/postsList.component';
import Text from '@shared/ui/text/text.component';
import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { getCanceledPosts } from 'src/store/slices/postsSlice';

import { createStyles } from '../posts.styles';

export default function Canceled() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { canceledPosts, isLoading } = useAppSelector((state) => state.postsSlice);
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(getCanceledPosts());
  }, [dispatch]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isLoading && !canceledPosts.length) {
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleFetch} />}
        style={styles.wrapper}
      >
        <Text variant="h3">Nothing found</Text>
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrapper}>
      <PostsList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleFetch} />}
        list={canceledPosts}
      />
    </View>
  );
}
