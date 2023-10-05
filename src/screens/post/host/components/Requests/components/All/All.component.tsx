import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { getAllRequests } from 'src/store/slices/post/requests/allRequests.slice';

import { createStyles } from '../../Requests.styles';
import { TabViewProps } from '../../Requests.types';

export default function All({ id, confirmRequest, deleteRequest }: TabViewProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { allRequests, allRequestsLoading } = useAppSelector((state) => state.allRequestsSlice);
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(
      getAllRequests({
        id,
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    if (!allRequests.length) handleFetch();
  }, [handleFetch, allRequests.length]);

  if (allRequestsLoading) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.contentWrapper}
      nestedScrollEnabled={true}
      refreshControl={<RefreshControl refreshing={allRequestsLoading} onRefresh={handleFetch} />}
    >
      {allRequests.map((item) => (
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
