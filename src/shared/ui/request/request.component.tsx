import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';
import { PostRequest } from 'src/types/api/getPosts';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';
import { AvatarPlaceholder } from '../userpicGallery/components/avatarPlaceholder';

import { createStyles } from './request.styles';

export default function Request({
  data,
  confirmRequest,
  deleteRequest,
}: {
  data: PostRequest;
  confirmRequest: () => void;
  deleteRequest: () => void;
}) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <AvatarPlaceholder size={60} item={data.user} />

      <View style={styles.flex}>
        <View>
          <Text variant="h5">{data.user?.nickName}</Text>
        </View>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.row}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="phone" size={15} color={theme.colors.secondary} />
            </View>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name="telegram-plane" size={15} color={theme.colors.secondary} />
            </View>
          </View>
          <View style={styles.row}>
            {data.requestStatus !== 'Approve' && (
              <OutlinedButton title="Confirm" onPress={confirmRequest} height={30} width={70} />
            )}
            {data.requestStatus !== 'Rejected' && (
              <OutlinedButton title="Delete" onPress={deleteRequest} height={30} width={70} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
