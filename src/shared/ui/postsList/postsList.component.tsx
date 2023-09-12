import useTheme from '@shared/hooks/useTheme.hook';
import { PostCard } from '@shared/ui/postCard';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { createStyles } from './postsList.styles';
import { PostListProps } from './postsList.types';

export default function PostsList({ list, refreshControl }: PostListProps) {
  const styles = createStyles();
  const theme = useTheme();

  return (
    <FlatList
      data={list}
      refreshControl={refreshControl}
      renderItem={({ item }) => <PostCard data={item.data} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      contentContainerStyle={styles.wrapper}
      ListEmptyComponent={() => <ActivityIndicator size={24} color={theme.colors.primary} />}
      maxToRenderPerBatch={5}
    />
  );
}
