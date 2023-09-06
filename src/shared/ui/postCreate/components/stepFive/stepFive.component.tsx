import { PackagePage } from '@shared/ui/packagePage';
import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';

import { STEP_FIVE_DATA } from './stepFive.data';
import { createStyles } from './stepFive.styles';
import { StepFiveProps } from './stepFive.types';
export default function StepFive({ post, setPost, next }: StepFiveProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const selectPackage = () => {
    setPost({
      ...post,
      packageId: STEP_FIVE_DATA.id,
    });
    next();
  };

  return (
    <View style={styles.wrapper}>
      <PackagePage
        date={STEP_FIVE_DATA.date}
        description={STEP_FIVE_DATA.description}
        place={STEP_FIVE_DATA.place}
        restrictions={STEP_FIVE_DATA.restrictions}
        onSelect={selectPackage}
      />
    </View>
  );
}
