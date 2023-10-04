import { Photo } from 'src/store/slices/profileSlice';

export interface ModalGalleryProps {
  close: () => void;
  images: Photo[];
}
