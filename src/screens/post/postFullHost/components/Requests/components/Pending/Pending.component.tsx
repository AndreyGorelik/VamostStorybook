import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { getPendingRequests } from 'src/store/slices/post.slice';

import { createStyles } from '../../Requests.styles';
import { TabViewProps } from '../../Requests.types';

export default function Pending({ id, confirmRequest, deleteRequest }: TabViewProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { pendingRequests, pendingLoading } = useAppSelector((state) => state.postSlice);
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(
      getPendingRequests({
        id,
        requestStatus: 'Pending',
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    if (!pendingRequests.length) handleFetch();
  }, [handleFetch, pendingRequests.length]);

  if (pendingLoading) return <PageLoader />;

  return (
    <ScrollView
      contentContainerStyle={styles.contentWrapper}
      nestedScrollEnabled={true}
      refreshControl={<RefreshControl refreshing={pendingLoading} onRefresh={handleFetch} />}
    >
      {pendingRequests.map((item) => (
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
