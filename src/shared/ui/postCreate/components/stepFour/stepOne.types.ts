import React from 'react';

export interface StepFourProps {
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
  changeTitle: React.Dispatch<React.SetStateAction<string>>;
  changeHeaderImage: React.Dispatch<React.SetStateAction<string>>;
  next: () => void;
}

export interface PackageListItem {
  date: string;
  description: string;
  id: string;
  place: string;
  restrictions: string[];
  title: string;
  uri: string;
}
