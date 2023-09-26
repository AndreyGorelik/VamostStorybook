import React from 'react';

import { Post } from '../../postCreate.types';

export interface StepFourProps {
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
  changeTitle: React.Dispatch<React.SetStateAction<string>>;
  changeHeaderImage: React.Dispatch<React.SetStateAction<string>>;
  next: () => void;
  post: Post;
  placeId: string;
  setFullPackageId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface PackageListItem {
  date: string;
  description: string;
  id: string;
  place: string;
  maxPeople: number;
  name: string;
  imageUrl: string;
}
