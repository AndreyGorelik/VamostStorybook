import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { checkUserField } from '@shared/utils/checkUserFields';
import { Redirect, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { refresh, setStep } from 'src/store/slices/authSlice';
export { ErrorBoundary } from 'expo-router';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function Index() {
  const rootNavigationState = useRootNavigationState();
  const { isAuth, isLoading } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const { step, finished } = checkUserField(user);

  useEffect(() => {
    if (rootNavigationState?.key) dispatch(refresh());
  }, [dispatch, rootNavigationState?.key]);

  if (!rootNavigationState?.key) return null;

  if (isLoading) {
    return <PageLoader />;
  }

  if (isAuth === false) {
    return <Redirect href="/login" />;
  }

  if (!finished) {
    dispatch(setStep(step));
    return <Redirect href="/register" />;
  }

  return <Redirect href="/home" />;
}

// eslint-disable-next-line import/no-mutable-exports
let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require('../.storybook').default;
  EntryPoint = () => {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
