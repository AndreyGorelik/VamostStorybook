import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { router } from 'expo-router';
import { Animated, Pressable } from 'react-native';

import { createStyles } from './userRequest.styles';
import { UserRequestProps } from './userRequest.types';

export default function UserRequest({ request, index }: UserRequestProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  function handleNavigate() {
    router.push(`posts/${request.postId}`);
  }

  return (
    <Animated.View>
      <Pressable style={styles.wrapper} onPress={handleNavigate}>
        <Text>Request #{index}</Text>
        <Text style={styles[request.requestStatus]}>{request.requestStatus}</Text>
      </Pressable>
    </Animated.View>
  );
}
