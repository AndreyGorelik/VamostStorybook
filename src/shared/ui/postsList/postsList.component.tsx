import { PostCard } from '@shared/ui/postCard';
import { View, FlatList } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './postsList.styles';
import { PostListProps } from './postsList.types';

export default function PostsList({ list, refreshControl }: PostListProps) {
  const styles = createStyles();

  return (
    <FlatList
      data={list}
      refreshControl={refreshControl}
      renderItem={({ item }) => <PostCard {...item} />}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      contentContainerStyle={styles.wrapper}
      ListEmptyComponent={() => <Text variant="h4">Nothing found</Text>}
      maxToRenderPerBatch={5}
    />
  );
}
