import { Photo } from 'src/store/slices/profileSlice';

export interface GalleryImageProps {
  image: Photo;
  deletingPhoto: boolean;
  deletePhotoError: string;
}
