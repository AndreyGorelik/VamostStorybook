import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import { Button } from '../../../button';

import { createStyles } from './stepOne.styles';
import { StepOneProps } from './stepOne.types';

export default function StepOne({ post, setPost, next }: StepOneProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const chooseHostOrGuest = (host: boolean) => {
    setPost({
      ...post,
      host,
    });
    next();
  };

  return (
    <View style={styles.wrapper}>
      <Button title="I am the Host (i am paying)" onPress={() => chooseHostOrGuest(true)} />
      <Button title="I am the Guest (i am not paying)" onPress={() => chooseHostOrGuest(false)} />
    </View>
  );
}
