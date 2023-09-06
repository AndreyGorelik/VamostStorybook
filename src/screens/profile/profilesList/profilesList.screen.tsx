import { POSTS } from '@screens/home/home.data';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { Link, useLocalSearchParams } from 'expo-router';
import { FlatList, Image, View } from 'react-native';

import { createStyles } from './profilesList.styles';
import { UserProfile } from './profilesList.types';

export default function ProfilesList() {
  const params = useLocalSearchParams();
  const { postId } = params;
  const theme = useTheme();
  const styles = createStyles(theme);
  const post = POSTS.find((item) => item.id === postId);

  const renderItem = ({ item }: { item: UserProfile }) => {
    return (
      <Link
        href={{
          pathname: '/profilefull/[id]',
          params: { id: item.id },
        }}
      >
        <View style={styles.profile}>
          <Image style={styles.profilePhoto} source={item.photo} />
          <Text variant="h5">{item.name}</Text>
        </View>
      </Link>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={post?.guests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
