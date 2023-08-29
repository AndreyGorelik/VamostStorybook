import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ImageBackground } from 'react-native';

import { HeaderButton } from '../headerButton';

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
        {leftIconName && (
          <HeaderButton
            onPress={leftIconPress}
            icon={leftIconName}
            isBackground={true}
            variant="left"
          />
        )}
        <Text
          variant="h3"
          numberOfLines={1}
          ellipsizeMode="tail"
          width={320}
          align="center"
          {...styles.headerText}
        >
          {title}
        </Text>
        {rightIconName && (
          <HeaderButton
            onPress={rightIconPress}
            icon={rightIconName}
            isBackground={true}
            variant="right"
          />
        )}
      </ImageBackground>
    </View>
  );
}
