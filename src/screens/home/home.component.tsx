import { MaterialIcons, Entypo } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import PostsList from '@shared/ui/postsList/postsList.component';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { FilterItem } from './components/filterItem';
import { POSTS } from './home.data';
import { createStyles } from './home.styles';
import { PostsData } from './home.types';

export enum Filters {
  All = 'All',
  Hosts = 'Hosts',
  Guests = 'Guests',
}

export default function Home() {
  const [posts, setPosts] = useState<PostsData>(POSTS);
  const [filter, setFilter] = useState<Filters>(Filters.Guests);
  const [city, setCity] = useState<string>('Miami');
  const filteredPosts =
    filter === 'All'
      ? posts
      : posts.filter((item) => item.data.type === filter.slice(0, filter.length - 1));

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.today}>
          <Text variant="h2">Today in {city}</Text>
          <View style={styles.viewAll}>
            <Text variant="small">View all</Text>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.text} />
          </View>
        </View>
        <View style={styles.filter}>
          <Text variant="common">Filter posts:</Text>
          <FlatList
            data={Object.values(Filters)}
            renderItem={({ item }) => (
              <FilterItem filter={filter} name={item} setFilter={setFilter} theme={theme} />
            )}
            keyExtractor={(item) => item}
            horizontal
            bounces={false}
            ItemSeparatorComponent={() => (
              <Entypo name="dot-single" size={24} color={theme.colors.textDisabled} />
            )}
          />
        </View>
      </View>
      <PostsList list={filteredPosts} />
    </View>
  );
}
