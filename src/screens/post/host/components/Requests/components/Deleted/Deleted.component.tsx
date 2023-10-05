import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { getDeletedRequests } from 'src/store/slices/post/requests/deletedRequests.slice';

import { createStyles } from '../../Requests.styles';
import { TabViewProps } from '../../Requests.types';

export default function Deleted({ id, confirmRequest, deleteRequest }: TabViewProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { deletedRequests, deletedRequestsLoading } = useAppSelector(
    (state) => state.deletedRequestsSlice
  );
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(
      getDeletedRequests({
        id,
        requestStatus: 'Rejected',
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    if (!deletedRequests.length) handleFetch();
  }, [handleFetch, deletedRequests.length]);

  if (deletedRequestsLoading) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.contentWrapper}
      refreshControl={
        <RefreshControl refreshing={deletedRequestsLoading} onRefresh={handleFetch} />
      }
    >
      {deletedRequests.map((item) => (
        <Request
          key={item.id}
          confirmRequest={() => confirmRequest(item)}
          deleteRequest={() => deleteRequest(item)}
          data={item}
        />
      ))}
    </ScrollView>
  );
}
