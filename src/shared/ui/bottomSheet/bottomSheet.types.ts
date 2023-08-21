import { MaterialIcons } from '@expo/vector-icons';

export type BottomSheetProps = {
  hideSheet: () => void;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  rightIconName?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  headerStyle: 'default' | 'image';
  uri?: string;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
};
