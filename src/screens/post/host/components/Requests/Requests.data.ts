import { RequestStatus } from 'src/types/api/getPosts';

export const tabs: Record<RequestStatus, string> = {
  New: 'Pending',
  Rejected: 'Rejected',
  Approve: 'Approved',
};
