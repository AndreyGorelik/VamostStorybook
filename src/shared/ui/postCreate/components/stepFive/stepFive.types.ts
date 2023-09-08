import React from 'react';

import { Post } from '../../postCreate.types';

export interface StepFiveProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
  packageId: string | null;
}
