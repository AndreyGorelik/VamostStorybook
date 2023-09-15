import { ReactElement } from 'react';

export type ActionProps = {
  Icon: ReactElement;
  onPress: () => void;
  title: string;
};
