import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { UserPicGallery } from '@shared/ui/userpicGallery';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, View } from 'react-native';

import { createStyles } from './Header.styles';
import { HeaderProps } from './Header.types';

export default function Header({ postInfo }: HeaderProps) {
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
        <View style={styles.guestsGallery}>
          <UserPicGallery data={postInfo.guests.slice(0, 3)} size={65} />
        </View>
      </View>
      <View style={styles.guests}>
        <Text>Guests:</Text>

        {postInfo.guests.length > 3 && <Text>({`${postInfo.guests.length - 3} left`})</Text>}
      </View>
    </View>
  );
}
