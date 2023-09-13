import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import FloatButton from '@shared/ui/floatButton/floatButton.component';
import PostCreate from '@shared/ui/postCreate/postCreate.component';
import PostsList from '@shared/ui/postsList/postsList.component';
import { SelectCity } from '@shared/ui/selectCity';
import Text from '@shared/ui/text/text.component';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, RefreshControl, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getPosts } from 'src/store/slices/postsSlice';

import { FilterItem } from './components/filterItem';
import { createStyles } from './home.styles';

export enum Filters {
  All = 'All',
  Hosts = 'Hosts',
  Guests = 'Guests',
}

export default function Home() {
  const { posts, isLoading } = useAppSelector((state) => state.postsSlice);
  const [filter, setFilter] = useState<Filters>(Filters.Guests);
  const [city, setCity] = useState<string>('Miami');
  const [open, setOpen] = useState<boolean>(false);
  const [postCreateVisible, setPostCreateVisible] = useState(false);
  const filteredPosts =
    filter === 'All'
      ? posts
      : posts.filter((item) => item.data.type === filter.slice(0, filter.length - 1));

  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useDispatch();

  const handleFetch = useCallback(() => {
    dispatch(getPosts({ place: city, filter }));
  }, [city, dispatch, filter]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.today}>
            <Text variant="h2" ellipsizeMode="tail" numberOfLines={1} width={250}>
              Today in {city}
            </Text>
            <Pressable style={styles.viewAll} onPress={() => setOpen(true)}>
              <Text variant="small">View all</Text>
              <MaterialIcons name="chevron-right" size={20} color={theme.colors.text} />
            </Pressable>
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
        <PostCreate open={postCreateVisible} setOpen={setPostCreateVisible} />
        {isLoading ? (
          <PageLoader />
        ) : (
          <PostsList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleFetch} />}
            list={posts}
          />
        )}
      </View>
      <FloatButton onPress={() => setPostCreateVisible(!postCreateVisible)} />
      <SelectCity open={open} setOpen={setOpen} setCity={setCity} key={city} />
    </>
  );
}
