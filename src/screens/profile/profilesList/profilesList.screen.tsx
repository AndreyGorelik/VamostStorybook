import useTheme from '@shared/hooks/useTheme.hook';
import { PostGuests } from '@shared/ui/postCard/postCard.types';
import Text from '@shared/ui/text/text.component';
import { Link, useLocalSearchParams } from 'expo-router';
import { FlatList, Image, View } from 'react-native';

import { createStyles } from './profilesList.styles';

export default function ProfilesList() {
  const params = useLocalSearchParams();
  const guestsList = JSON.parse(params.guests as string);
  const theme = useTheme();
  const styles = createStyles(theme);

  const renderItem = ({ item }: { item: PostGuests }) => {
    return (
      <Link
        href={{
          pathname: '/profilefull/[id]',
          params: { id: item.id },
        }}
      >
        <View style={styles.profile}>
          <Image style={styles.profilePhoto} source={{ uri: item.avatar }} />
          <Text variant="h5">{item.nickName}</Text>
        </View>
      </Link>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={guestsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
