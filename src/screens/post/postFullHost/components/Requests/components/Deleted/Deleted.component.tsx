import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getDeletedRequests } from 'src/store/slices/post.slice';

import { createStyles } from '../../Requests.styles';
import { TabViewProps } from '../../Requests.types';

export default function Deleted({ id, confirmRequest, deleteRequest }: TabViewProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { deletedRequests, deletedLoading } = useAppSelector((state) => state.postSlice);
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

  if (deletedLoading) return <PageLoader />;

  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
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
