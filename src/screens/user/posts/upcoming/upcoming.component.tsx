import useTheme from '@shared/hooks/useTheme.hook';
import { PostCard } from '@shared/ui/postCard';
import { View, FlatList } from 'react-native';

import POSTS_DATA from './upcoming.data';
import { createStyles } from './upcoming.styles';
import PostsList from '@shared/ui/postsList/postsList.component';

export default function Upcoming() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <PostsList list={POSTS_DATA} />
    </View>
  );
}
