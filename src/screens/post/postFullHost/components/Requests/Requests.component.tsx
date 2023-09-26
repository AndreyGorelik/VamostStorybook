import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Divider from '@shared/ui/divider/divider.component';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { confirmRequest, deleteRequest } from 'src/store/slices/postSlice';
import { PostRequest } from 'src/types/api/getPosts';

import { All } from './components/All';
import { Deleted } from './components/Deleted';
import { Pending } from './components/Pending';
import { tabs } from './Requests.data';
import { createStyles } from './Requests.styles';
import { RequestsProps } from './Requests.types';

export default function Requests({ postId }: RequestsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [index, setIndex] = useState<number>(1);
  const dispatch = useAppDispatch();

  function handleConfirmRequest(request: PostRequest) {
    dispatch(confirmRequest(request));
  }
  function handleDeleteRequest(request: PostRequest) {
    dispatch(deleteRequest(request));
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
      {index === 1 && (
        <Pending
          id={postId}
          confirmRequest={handleConfirmRequest}
          deleteRequest={handleDeleteRequest}
        />
      )}
      {index === 2 && (
        <Deleted
          id={postId}
          confirmRequest={handleConfirmRequest}
          deleteRequest={handleDeleteRequest}
        />
      )}
      {index === 3 && (
        <All
          id={postId}
          confirmRequest={handleConfirmRequest}
          deleteRequest={handleDeleteRequest}
        />
      )}
    </View>
  );
}
