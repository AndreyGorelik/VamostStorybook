import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Image, ScrollView, View } from 'react-native';

import Button from '../button/button.component';
import Text from '../text/text.component';

import { styles } from './request.styles';
import { RequestProps } from './request.types';

export default function Request({ data }: { data: RequestProps }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={data.photo} style={styles.userpic} />
        </View>
        <View>
          <View>
            <Text variant="h5">{data.name}</Text>
          </View>
          <View style={styles.rowSpaceBetween}>
            <View style={styles.row}>
              <View style={styles.iconWrapper}>
                <FontAwesome name="phone" size={15} color="white" />
              </View>
              <View style={styles.iconWrapper}>
                <FontAwesome5 name="telegram-plane" size={15} color="white" />
              </View>
            </View>
            <View style={styles.row}>
              <Button title="Confirm" />
              <Button title="Delete" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
