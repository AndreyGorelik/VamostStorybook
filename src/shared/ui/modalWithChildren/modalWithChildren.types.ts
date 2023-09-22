import { ReactNode } from 'react';

export interface ModalWithChildrenProps {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  children: ReactNode;
}
