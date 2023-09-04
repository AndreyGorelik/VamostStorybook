import { PostCard } from '@shared/ui/postCard';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { createStyles } from './postsList.styles';
import { PostListProps } from './postsList.types';
import useTheme from '@shared/hooks/useTheme.hook';

export default function PostsList({ list }: PostListProps) {
  const styles = createStyles();
  const theme = useTheme();

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <PostCard data={item.data} />}
      keyExtractor={(item) => `${item.id}`}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      contentContainerStyle={styles.wrapper}
      ListEmptyComponent={() => <ActivityIndicator size={24} color={theme.colors.primary} />}
      maxToRenderPerBatch={5}
    />
  );
}
