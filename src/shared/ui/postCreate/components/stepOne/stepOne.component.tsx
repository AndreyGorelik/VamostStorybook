import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { View } from 'react-native';

import { HostType } from '../../postCreate.types';

import { createStyles } from './stepOne.styles';
import { StepOneProps } from './stepOne.types';

export default function StepOne({ post, setPost, next }: StepOneProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const chooseHostOrGuest = (hostType: HostType) => {
    setPost({
      ...post,
      hostType,
    });
    next();
  };

  return (
    <View style={styles.wrapper}>
      <Button title="I am the Host (i am paying)" onPress={() => chooseHostOrGuest('Host')} />
      <Button title="I am the Guest (i am not paying)" onPress={() => chooseHostOrGuest('Guest')} />
    </View>
  );
}
