import React from 'react';

import { Post } from '../../postCreate.types';

export interface StepFourProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
}
