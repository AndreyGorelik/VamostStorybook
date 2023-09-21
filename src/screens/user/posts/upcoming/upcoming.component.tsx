import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import PostsList from '@shared/ui/postsList/postsList.component';
import Text from '@shared/ui/text/text.component';
import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { getUpcomingPostsAction } from 'src/store/slices/posts/upcomingPosts.slice';

import { createStyles } from '../posts.styles';

export default function Upcoming() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { upcomingPosts, isLoading } = useAppSelector((state) => state.upcomingPostsSlice);
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(getUpcomingPostsAction());
  }, [dispatch]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isLoading && !upcomingPosts.length) {
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
        list={upcomingPosts}
      />
    </View>
  );
}
