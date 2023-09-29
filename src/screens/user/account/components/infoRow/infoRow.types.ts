import { InputProps } from '@shared/ui/input/input.types';

export interface InfoRowProps extends InputProps {
  title: string;
  editable: boolean;
  input?: boolean;
}
