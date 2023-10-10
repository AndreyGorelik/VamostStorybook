import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { PostRequest } from 'src/types/api/getPosts';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

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
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        {loading && <ActivityIndicator size={24} color={theme.colors.text} style={styles.loader} />}
        {data.user?.avatar ? (
          <Image
            source={{ uri: getImagePath(data.user.avatar) }}
            style={styles.userpic}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        ) : (
          <Ionicons
            name="person-circle"
            size={60}
            color={theme.colors.lightText}
            style={styles.userpic}
          />
        )}
      </View>
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
