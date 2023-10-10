import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Divider from '@shared/ui/divider/divider.component';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  addDeletedRequest,
  removeDeletedRequest,
} from 'src/store/slices/post/requests/deletedRequests.slice';
import { removePendingRequest } from 'src/store/slices/post/requests/pendingRequests.slice';
import { PostRequest } from 'src/types/api/getPosts';

import { tabs } from './Requests.data';
import { createStyles } from './Requests.styles';
import { RequestsProps } from './Requests.types';
import {
  addApproveRequest,
  removeApproveRequest,
} from 'src/store/slices/post/requests/approveRequests.slice';

export default function Requests({ postId }: RequestsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [index, setIndex] = useState<number>(1);
  const dispatch = useAppDispatch();

  function handleConfirmRequest(request: PostRequest) {
    dispatch(removePendingRequest(request));
    dispatch(removeDeletedRequest(request));
    dispatch(addApproveRequest(request));
  }
  function handleDeleteRequest(request: PostRequest) {
    dispatch(removePendingRequest(request));
    dispatch(removeApproveRequest(request));
    dispatch(addDeletedRequest(request));
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {tabs.map((tab) => (
          <Pressable key={tab.id} onPress={() => setIndex(tab.id)} style={styles.tab}>
            <Text style={index === tab.id ? [styles.text, styles.selected] : styles.text}>
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Divider />
    </View>
  );
}
