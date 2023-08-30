import useTheme from '@shared/hooks/useTheme.hook';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { CancelBtn } from '../cancelBtn';

import { createStyles } from './imageBox.styles';
import { ImageBoxProps } from './imageBox.types';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function ImageBox({ uri, onDelete }: ImageBoxProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Animated.View
      style={styles.wrapper}
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(150)}
    >
      <CancelBtn onDelete={onDelete} />
      <LinearGradient
        colors={[theme.colors.imageGradient, theme.colors.transparent]}
        style={styles.gradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <AnimatedImage source={{ uri: uri }} style={styles.image} />
    </Animated.View>
  );
}
