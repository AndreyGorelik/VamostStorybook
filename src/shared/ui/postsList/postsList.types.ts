import { PostCardProps } from '@shared/ui/postCard/postCard.types';

export type PostData = {
  id: number;
  data: PostCardProps;
};

export interface PostListProps {
  list: PostData[];
}
