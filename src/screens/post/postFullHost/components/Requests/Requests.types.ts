import { PostRequest } from 'src/types/api/getPosts';

interface RequestsProps {
  postId: string;
}

interface TabViewProps {
  id: string;
  confirmRequest: (request: PostRequest) => void;
  deleteRequest: (request: PostRequest) => void;
}

export type { RequestsProps, TabViewProps };
