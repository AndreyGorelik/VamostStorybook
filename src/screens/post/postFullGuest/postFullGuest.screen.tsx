import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ImageBackground, ScrollView, Alert } from 'react-native';

import useTheme from '../../../shared/hooks/useTheme.hook';
import { Button } from '../../../shared/ui/button';
import Divider from '../../../shared/ui/divider/divider.component';
import Text from '../../../shared/ui/text/text.component';
import { UserPicGallery } from '../../../shared/ui/userpicGallery';

import { POST_FULL_GUEST_DATA } from './postFullGuest.data';
import { createStyles } from './postFullGuest.styles';

export default function PostFullGuest() {
  const data = POST_FULL_GUEST_DATA;
  const theme = useTheme();
  const styles = createStyles(theme);
  const requestInvite = () => {
    Alert.alert('confirm');
  };

  return (
    <ScrollView style={styles.scrollWrapper}>
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={data.photo}
        style={styles.photoContainer}
      >
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>

      <Image source={data.host.userPic} style={styles.userPicture} />
      <View style={styles.postInfo}>
        <Text variant="h4">TODO: {data.venueName}</Text>
        <Text>Hosted by: {data.host.name}</Text>
        <Button title="Request" onPress={requestInvite} />
        <Text variant="disabled" fontSize={14}>
          {format(data.date, 'MMMM d, yyyy, h:mm a')}
        </Text>
        <Text>
          Guest(s):
          {data.guestFemaleCount > 0 ? ' +' + data.guestFemaleCount.toString() + ' Women' : ''}
          {data.guestMaleCount > 0 ? ' +' + data.guestFemaleCount.toString() + ' Men' : ''}
          {data.guestOtherCount > 0 ? ' +' + data.guestFemaleCount.toString() + ' Other' : ''}
        </Text>
        <UserPicGallery data={data.guests} size={60} />
        <Divider />
        <Text variant="h5">About {data.postName}</Text>
        <Text>{data.description}</Text>
      </View>
    </ScrollView>
  );
}
