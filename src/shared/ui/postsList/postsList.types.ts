import { PostCardProps } from '@shared/ui/postCard/postCard.types';
import { FlatListProps } from 'react-native';

export type PostData = {
  id: number;
  data: PostCardProps;
};

export interface PostListProps extends FlatListProps<PostData> {
  list: PostData[];
}
