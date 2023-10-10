import useTheme from '@shared/hooks/useTheme.hook';
import Divider from '@shared/ui/divider/divider.component';
import { Pressable, Text, View } from 'react-native';
import { RequestStatus } from 'src/types/api/getPosts';

import { tabs } from './Requests.data';
import { createStyles } from './Requests.styles';
import { RequestsProps } from './Requests.types';

export default function Requests({ active, setActive }: RequestsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {Object.entries(tabs).map(([status, title]) => (
          <Pressable
            key={status}
            onPress={() => setActive(status as RequestStatus)}
            style={styles.tab}
          >
            <Text style={active === status ? [styles.text, styles.selected] : styles.text}>
              {title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Divider />
    </View>
  );
}
