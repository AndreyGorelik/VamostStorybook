import { GestureResponderEvent } from 'react-native';

export interface FloatButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
