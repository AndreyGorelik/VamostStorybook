import { FontAwesome } from '@expo/vector-icons';
import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Button } from '../../../button';

import { createStyles } from './stepSix.styles';
import { StepSixProps } from './stepSix.types';

export default function StepSix({ onFinish, createPost }: StepSixProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { isLoading, error } = useAppSelector((state) => state.postCreateSlice);

  useEffect(() => {
    createPost();
  }, [createPost]);

  if (isLoading) return <ActivityIndicator size={50} />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      <View style={styles.finishMessage}>
        <FontAwesome name="check-circle" size={125} color={theme.colors.button} />
        <Text variant="h3">Post created!</Text>
      </View>
      <Button title="Finish" onPress={onFinish} />
    </>
  );
}
