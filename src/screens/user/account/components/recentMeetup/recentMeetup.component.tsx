import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ImageBackground } from 'react-native';

import { createStyles } from './recentMeetup.styles';
import { RecentMeetupProps } from './recentMeetup.types';

export default function RecentMeetup({ data }: RecentMeetupProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <ImageBackground
        source={data.photo}
        imageStyle={styles.meetUpImageStyle}
        style={styles.meetupImageWrapper}
      >
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.mmetUpLinearGradient}
        />
        <Text variant="common" style={styles.meetupText} numberOfLines={1} width={120}>
          {data.postName}
        </Text>
      </ImageBackground>
    </Pressable>
  );
}
