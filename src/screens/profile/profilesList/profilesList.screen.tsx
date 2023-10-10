import useTheme from '@shared/hooks/useTheme.hook';
import { PostGuests } from '@shared/ui/postCard/postCard.types';
import Text from '@shared/ui/text/text.component';
import { AvatarPlaceholder } from '@shared/ui/userpicGallery/components/avatarPlaceholder';
import { Link, useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';

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
          params: { id: item._id },
        }}
      >
        <View style={styles.profile}>
          <AvatarPlaceholder size={50} item={item} />
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
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
