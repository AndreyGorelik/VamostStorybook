import { Photo } from '../../photoGallery.types';

export interface ModalGalleryProps {
  close: () => void;
  images: Photo[];
}
