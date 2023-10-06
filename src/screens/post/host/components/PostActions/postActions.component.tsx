import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { OutlinedButton } from '@shared/ui/outlinedBtn';
import React from 'react';
import { View, Alert } from 'react-native';
import { updatePostStatus } from 'src/store/slices/post/post.slice';

import { createStyles } from './postActions.styles';
import { PostActionsProps } from './postActions.types';

export default function PostActions({ post, refetchPost }: PostActionsProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const styles = createStyles(theme);

  const actionBtns = [
    {
      title: 'Confirm & Lock',
      color: theme.colors.postStatus.confirmed,
      disabled: Boolean(post?.info?.guests?.length && post.info.guests.length < 2),
      onPress: () => {
        confirmPost();
        refetchPost();
      },
    },
    {
      title: 'Change',
      color: theme.colors.postStatus.created,
      onPress: changePost,
    },
    {
      title: 'Cancel',
      color: theme.colors.postStatus.canceled,
      onPress: () => {
        cancelPost();
        refetchPost();
      },
    },
  ];

  function confirmPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info._id,
        postStatus: 'Active',
      })
    );
  }
  function changePost() {
    Alert.alert('change');
  }
  function cancelPost() {
    if (!post || !post.info) return;
    dispatch(
      updatePostStatus({
        id: post?.info._id,
        postStatus: 'Cancelled',
      })
    );
  }

  return (
    <View style={styles.actionButtons}>
      {actionBtns.map((button) => (
        <OutlinedButton key={button.title} {...button} {...styles.actionBtn} />
      ))}
    </View>
  );
}
