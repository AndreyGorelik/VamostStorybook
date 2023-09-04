import useTheme from '@shared/hooks/useTheme.hook';
import PostsList from '@shared/ui/postsList/postsList.component';
import { View } from 'react-native';

import POSTS_DATA from '../posts.data';
import { createStyles } from '../posts.styles';

export default function Canceled() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <PostsList list={POSTS_DATA} />
    </View>
  );
}
