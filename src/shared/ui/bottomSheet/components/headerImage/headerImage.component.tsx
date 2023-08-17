import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable, ImageBackground } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import Text from '../../../text/text.component';

import { createStyles } from './headerImage.styles';
import { HeaderImageProps } from './headerImage.types';

export default function HeaderImage({
  title,
  leftIconName,
  leftIconPress,
  rightIconName,
  rightIconPress,
  uri,
}: HeaderImageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <ImageBackground source={{ uri: uri }} style={styles.image}>
        <LinearGradient
          // Background Linear Gradient
          colors={[theme.colors.primary, theme.colors.placeholder]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{ flex: 1, opacity: 0.5 }}
        />
        <Pressable
          style={({ pressed }) => [
            styles.leftIcon,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={leftIconPress}
        >
          <View style={styles.background}></View>
          <MaterialIcons name={leftIconName} size={24} style={styles.iconWrapper} />
        </Pressable>

        <Text variant="h3" {...styles.headerText}>
          {title}
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.rightIcon,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={rightIconPress}
        >
          <View style={styles.background}></View>
          <MaterialIcons name={rightIconName} size={24} style={styles.iconWrapper} />
        </Pressable>
      </ImageBackground>
    </View>
  );
}
