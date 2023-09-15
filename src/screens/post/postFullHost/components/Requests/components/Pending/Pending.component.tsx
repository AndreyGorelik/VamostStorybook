import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getPendingRequests } from 'src/store/slices/postSlice';

import { createStyles } from './Pending.styles';
import { PendingProps } from './Pending.types';

export default function Pending({ id, confirmRequest, deleteRequest }: PendingProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { pendingRequests, isRequestLoading } = useAppSelector((state) => state.postSlice);
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

  if (isRequestLoading) return <PageLoader />;

  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
      {pendingRequests.map((item) => (
        <Request
          key={item.id}
          confirmRequest={() => confirmRequest(item.id)}
          deleteRequest={() => deleteRequest(item.id)}
          data={item}
        />
      ))}
    </ScrollView>
  );
}
