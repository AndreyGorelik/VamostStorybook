import React from 'react';

import { Post } from '../../postCreate.types';

export interface StepTwoProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
  setPlaceId: React.Dispatch<React.SetStateAction<string>>;
}
