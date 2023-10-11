import { PostInfo } from 'src/types/actions/actions.types';

export interface PostActionsProps {
  post: PostInfo;
  refetchPost: () => void;
}
