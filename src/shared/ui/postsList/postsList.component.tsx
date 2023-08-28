import { PostCard } from '@shared/ui/postCard';
import { View, FlatList } from 'react-native';

import { createStyles } from './postsList.styles';
import { PostListProps } from './postsList.types';

export default function PostsList({ list }: PostListProps) {
  const styles = createStyles();

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <PostCard data={item.data} />}
      keyExtractor={(item) => `${item.id}`}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      contentContainerStyle={styles.wrapper}
    />
  );
}
