export interface Photo {
  id: string;
  imageUrl: string;
}

export interface PhotoGalleryProps {
  images: Photo[];
}
