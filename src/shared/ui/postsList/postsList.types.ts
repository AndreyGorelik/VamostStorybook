import { FlatListProps } from 'react-native';
import { PostResponse } from 'src/types/actions/actions.types';

export interface PostListProps extends Partial<FlatListProps<PostResponse>> {
  list: PostResponse[];
}
