import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Image, View } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

import { createStyles } from './request.styles';
import { RequestProps } from './request.types';

export default function Request({
  data,
  confirmRequest,
  deleteRequest,
}: {
  data: RequestProps;
  confirmRequest: () => void;
  deleteRequest: () => void;
}) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <View>
        <Image source={data.photo} style={styles.userpic} />
      </View>
      <View style={styles.flex}>
        <View>
          <Text variant="h5">{data.name}</Text>
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
            <OutlinedButton title="Confirm" onPress={confirmRequest} height={30} width={70} />
            <OutlinedButton title="Delete" onPress={deleteRequest} height={30} width={70} />
          </View>
        </View>
      </View>
    </View>
  );
}
