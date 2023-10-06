import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { PageLoader } from '@shared/ui/pageLoader';
import { useNavigation } from 'expo-router';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { getPostAction, resetPost } from 'src/store/slices/post/post.slice';

import { Guests } from './components/Guests';
import { Header } from './components/Header';
import { Tags } from './components/Tags';
import { createStyles } from './guest.styles';

export default function GuestPost() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function refetchPost() {
    if (!post || !post.info) return;
    dispatch(resetPost());
    dispatch(getPostAction({ id: post.info._id as string }));
  }

  function handleBack() {
    navigation.goBack();
  }

  if (isPostLoading) return <PageLoader />;

  if (error) return <Text>{error}</Text>;

  if (!post?.info) {
    return <ErrorPage retry={async () => refetchPost()} error="Nothing found" />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollWrapper}
      style={styles.wrapper}
      bounces={true}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
    >
      <Header postInfo={post.info} />
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />

      <View style={styles.postInfo}>
        <Tags tags={post.info.tags} />
        <Guests postInfo={post.info} />
      </View>
    </ScrollView>
  );
}
