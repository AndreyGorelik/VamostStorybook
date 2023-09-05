import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, View } from 'react-native';

import { USER_DATA } from './profileFull.data';
import { createStyles } from './profileFull.styles';

export default function ProfileFull() {
  const params = useLocalSearchParams();
  const { userId: _userId } = params;

  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <ScrollView style={styles.wrapper}>
      <Image source={USER_DATA.photo} style={styles.headerPhoto} resizeMode="cover" />
      <View>
        <Text variant="h3" align="center">
          {USER_DATA.name}
        </Text>
      </View>
    </ScrollView>
  );
}
