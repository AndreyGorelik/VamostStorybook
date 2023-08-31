import { PackagePage } from '@shared/ui/packagePage';
import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';

import { createStyles } from './stepFive.styles';
import { StepFiveProps } from './stepFive.types';

export default function StepFive({ post, setPost, next, packageId }: StepFiveProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <PackagePage id={packageId} title={'asdasd'} />
    </View>
  );
}
