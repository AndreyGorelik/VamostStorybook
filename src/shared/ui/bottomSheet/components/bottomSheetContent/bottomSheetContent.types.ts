export interface BottomSheetContentProps {
  setHeight?: (value: number) => void;
  fixed?: boolean;
  imageHeader?: boolean;
}

export type ExitingAnimationType = {
  currentOriginX: number;
};
