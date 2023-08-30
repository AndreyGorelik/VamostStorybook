import React from 'react';

import { Post } from '../../postCreate.types';

export interface StepOneProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
}
