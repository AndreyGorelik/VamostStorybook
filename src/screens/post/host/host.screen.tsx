import ErrorPage from '@screens/errorPage/errorPage.component';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { PageLoader } from '@shared/ui/pageLoader';
import { Request } from '@shared/ui/request';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { View, RefreshControl, Text, FlatList } from 'react-native';
import {
  confirmRequest,
  deleteRequest,
  getPostAction,
  resetPost,
} from 'src/store/slices/post/post.slice';
import {
  addApproveRequest,
  removeApproveRequest,
} from 'src/store/slices/post/requests/approveRequests.slice';
import {
  removeDeletedRequest,
  addDeletedRequest,
} from 'src/store/slices/post/requests/deletedRequests.slice';
import { removePendingRequest } from 'src/store/slices/post/requests/pendingRequests.slice';
import { PostRequest, RequestStatus } from 'src/types/api/getPosts';

import { Guests } from './components/Guests';
import { Header } from './components/Header';
import { PostActions } from './components/PostActions';
import { Requests } from './components/Requests';
import { Tags } from './components/Tags';
import { createStyles } from './host.styles';

export default function PostFullHost() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { post, isPostLoading, error } = useAppSelector((state) => state.postSlice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<RequestStatus>('New');
  const { approveRequests } = useAppSelector((state) => state.approveRequestsSlice);
  const { pendingRequests } = useAppSelector((state) => state.pendingRequestsSlice);
  const { deletedRequests } = useAppSelector((state) => state.deletedRequestsSlice);

  const data: Record<RequestStatus, PostRequest[]> = {
    New: pendingRequests,
    Approve: approveRequests,
    Rejected: deletedRequests,
  };

  function handleConfirmRequest(request: PostRequest) {
    if (!post?.info._id) return;

    const approvedRequest: PostRequest = { ...request, requestStatus: 'Approve' };

    dispatch(removePendingRequest(request));
    dispatch(removeDeletedRequest(request));
    dispatch(addApproveRequest(approvedRequest));
    dispatch(
      confirmRequest({ postId: post.info._id, requestId: request._id, decision: 'Approve' })
    );
  }

  function handleDeleteRequest(request: PostRequest) {
    if (!post?.info._id) return;

    const rejectedRequest: PostRequest = { ...request, requestStatus: 'Rejected' };

    dispatch(removePendingRequest(request));
    dispatch(removeApproveRequest(request));
    dispatch(addDeletedRequest(rejectedRequest));
    dispatch(
      deleteRequest({ postId: post.info._id, requestId: request._id, decision: 'Rejected' })
    );
  }

  function refetchPost() {
    if (!post || !post.info) return;
    dispatch(resetPost());
    dispatch(getPostAction({ id: post.info._id as string }));
  }

  function handleBack() {
    navigation.goBack();
  }

  if (isPostLoading) return <PageLoader />;

  if (error) return <Text>{error}</Text>;

  if (!post?.info) {
    return <ErrorPage retry={async () => refetchPost()} error="Nothing found" />;
  }

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.wrapper}>
          <Header postInfo={post.info} />
          <HeaderButton
            onPress={handleBack}
            icon={'arrow-back'}
            isBackground={true}
            variant="left"
          />

          <View style={styles.postInfo}>
            <Tags tags={post.info.tags} />
            <Guests postInfo={post.info} />

            {post.info.postStatus === 'New' && (
              <>
                <PostActions post={post} refetchPost={refetchPost} />
                <Requests postId={post.info._id} active={active} setActive={setActive} />
              </>
            )}
          </View>
        </View>
      }
      data={data[active]}
      renderItem={({ item }) => (
        <Request
          data={item}
          confirmRequest={() => handleConfirmRequest(item)}
          deleteRequest={() => handleDeleteRequest(item)}
        />
      )}
      refreshControl={<RefreshControl refreshing={isPostLoading} onRefresh={refetchPost} />}
      extraData={active}
      style={{
        backgroundColor: theme.colors.background,
      }}
    />
  );
}
