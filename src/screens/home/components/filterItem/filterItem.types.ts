import { Filters } from '@screens/home/home.component';
import { Theme } from '@shared/hooks/useTheme.hook';
import { SetStateAction } from 'react';

export type FilterItemProps = {
  theme: Theme;
  filter: Filters;
  setFilter: React.Dispatch<SetStateAction<Filters>>;
  name: Filters;
};
