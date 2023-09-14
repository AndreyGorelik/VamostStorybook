import useTheme from '@shared/hooks/useTheme.hook';
import { HostingLabel } from '@shared/ui/hostingLabel';
import Text from '@shared/ui/text/text.component';
import { UserPicGallery } from '@shared/ui/userpicGallery';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, View } from 'react-native';

import { POST_FULL_HOST_DATA } from '../../postFullHost.data';

import { createStyles } from './Header.styles';
import { HeaderProps } from './Header.types';

export default function Header({ postInfo }: HeaderProps) {
  const data = POST_FULL_HOST_DATA;
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.header}>
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={{
          uri: postInfo.imageUrl,
        }}
        style={styles.photoContainer}
      >
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>
      <View style={styles.textOnPhoto}>
        <View style={styles.textHeader}>
          <Text variant="h3" color={theme.colors.secondary}>
            {postInfo.name}
          </Text>
          <Text variant="h5" color={theme.colors.secondary}>
            {format(new Date(postInfo.date), 'MMMM d, yyyy, h:mm a')}
          </Text>
        </View>
        <HostingLabel type="Host" />
        <View style={styles.guestsGallery}>
          <UserPicGallery data={data.guests.slice(0, 3)} size={65} />
        </View>
      </View>
      <View style={styles.guests}>
        <Text>My guests:</Text>

        {data.guests.length > 3 && <Text>({`${data.guests.length - 3} left`})</Text>}
      </View>
    </View>
  );
}
