import { POSTS } from '@screens/home/home.data';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, Image, View } from 'react-native';

import { createStyles } from './profilesList.styles';

export default function ProfilesList() {
  const params = useLocalSearchParams();
  const { postId } = params;
  const theme = useTheme();
  const styles = createStyles(theme);

  const post = POSTS.find((item) => item.id === postId);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={item.guestPhoto} />
        <Text variant="h5">{item.name}</Text>
      </View>
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
