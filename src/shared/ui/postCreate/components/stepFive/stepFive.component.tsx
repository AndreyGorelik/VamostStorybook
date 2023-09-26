import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { PackagePage } from '@shared/ui/packagePage';
import Text from '@shared/ui/text/text.component';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getFullPackage } from 'src/store/slices/postCreateSlice';

import useTheme from '../../../../hooks/useTheme.hook';

import { createStyles } from './stepFive.styles';
import { StepFiveProps } from './stepFive.types';
export default function StepFive({ post, setPost, next, fullPackageId }: StepFiveProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fullPackageId) dispatch(getFullPackage(fullPackageId));
  }, [dispatch, fullPackageId]);

  const { fullPackage, isLoading } = useAppSelector((state) => state.postCreateSlice);
  const { getFullPackageError } = useAppSelector((state) => state.errorsSlice);

  const selectPackage = () => {
    if (!fullPackageId) return;
    setPost({
      ...post,
      packageId: fullPackageId,
    });
    next();
  };

  if (getFullPackageError) return <Text>{getFullPackageError}</Text>;
  if (isLoading) return <ActivityIndicator size={50} />;

  return (
    <View style={styles.wrapper}>
      {fullPackage && (
        <PackagePage
          date={fullPackage.date}
          description={fullPackage.description}
          place={post.venue}
          maxPeople={fullPackage.maxPeople}
          minSpend={fullPackage.minSpend}
          onSelect={selectPackage}
        />
      )}
    </View>
  );
}
