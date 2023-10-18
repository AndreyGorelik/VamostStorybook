import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import Text from '@shared/ui/text/text.component';
import { useCallback } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { getUserRequestsAction } from 'src/store/slices/user.slice';

import UserRequest from './components/userRequest/userRequest.component';
import { createStyles } from './userRequests.styles';

export default function UserRequests() {
  const { requests, requestsLoading, requestsError, id } = useAppSelector(
    (state) => state.userSlice
  );
  const dispatch = useAppDispatch();

  const refetchRequests = useCallback(async () => {
    dispatch(getUserRequestsAction({ id }));
  }, [dispatch, id]);

  const theme = useTheme();
  const styles = createStyles(theme);

  if (requestsLoading) {
    return <PageLoader />;
  }

  if (requestsError) {
    return <ErrorPage error={requestsError} retry={refetchRequests} />;
  }

  if (!requests?.length) {
    return (
      <View style={styles.wrapper}>
        <Text variant="h3">Nothing found</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.listWrapper}
      data={requests}
      renderItem={({ item, index }) => <UserRequest index={index} request={item} />}
      contentContainerStyle={styles.listContainer}
      refreshControl={
        <RefreshControl refreshing={requestsLoading || false} onRefresh={refetchRequests} />
      }
    />
  );
}
