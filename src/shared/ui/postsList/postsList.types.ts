import { PostCardProps } from '@shared/ui/postCard/postCard.types';
import { FlatListProps } from 'react-native';

export type PostData = {
  id: string;
  data: PostCardProps;
};

export interface PostListProps extends Partial<FlatListProps<PostData>> {
  list: PostData[];
}
