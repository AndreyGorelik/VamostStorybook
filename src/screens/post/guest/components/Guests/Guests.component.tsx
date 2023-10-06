import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { View } from 'react-native';

import { createStyles } from './Guests.styles';
import { GuestsProps } from './Guests.types';

export default function Guests({ postInfo }: GuestsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <Text variant="h5" margin={10}>
        Guest(s)
      </Text>
      <View style={styles.row}>
        <Text>From my side:</Text>
        {postInfo.menCount > 0 && <Text style={styles.count}>{` +${postInfo.menCount} Men`}</Text>}
        {postInfo.womenCount > 0 && (
          <Text style={styles.count}>{` +${postInfo.womenCount} Women`}</Text>
        )}
        {postInfo.othersCount > 0 && (
          <Text style={styles.count}>{` +${postInfo.othersCount} Others`}</Text>
        )}
      </View>

      <View style={styles.row}>
        <Text>Guests invited:</Text>
        {postInfo.guestMenCount > 0 && (
          <Text style={styles.count}>{` +${postInfo.guestMenCount} Men`}</Text>
        )}
        {postInfo.guestWomenCount > 0 && (
          <Text style={styles.count}>{` +${postInfo.guestWomenCount} Women`}</Text>
        )}
        {postInfo.guestOthersCount > 0 && (
          <Text style={styles.count}>{` +${postInfo.guestOthersCount} Others`}</Text>
        )}
      </View>
    </View>
  );
}
