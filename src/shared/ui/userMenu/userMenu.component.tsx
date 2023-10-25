import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { View, Pressable } from 'react-native';

import Text from '../text/text.component';
import { AvatarPlaceholder } from '../userpicGallery/components/avatarPlaceholder';

import BackgroundWrapper from './components/backgroundWrapper/backgroundWrapper.component';
import { createStyles } from './userMenu.styles';

export default function UserMenu() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { email, nickname, avatar, id } = useAppSelector((state) => state.userSlice);

  function handleNavigate() {
    router.push('account');
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.wrapper, { opacity: pressed ? 0.9 : 1 }]}
      onPress={handleNavigate}
    >
      <BackgroundWrapper source={avatar}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        ></LinearGradient>
        <View style={styles.userInfo}>
          {avatar && <AvatarPlaceholder size={70} item={{ avatar, _id: id, nickName: nickname }} />}

          <View style={styles.textWrapper}>
            <Text
              variant="common"
              {...styles.text}
              ellipsizeMode="tail"
              width={160}
              numberOfLines={1}
            >
              {email}
            </Text>
            <Text variant="common" {...styles.text}>
              @{nickname}
            </Text>
          </View>
        </View>
      </BackgroundWrapper>
    </Pressable>
  );
}
