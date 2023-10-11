import { PostRequest, RequestStatus } from 'src/types/api/getPosts';

interface RequestsProps {
  postId: string;
  active: RequestStatus;
  setActive: (active: RequestStatus) => void;
}

interface TabViewProps {
  id: string;
  confirmRequest: (request: PostRequest) => void;
  deleteRequest: (request: PostRequest) => void;
}

export type { RequestsProps, TabViewProps };
