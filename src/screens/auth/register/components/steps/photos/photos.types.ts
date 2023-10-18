export type PhotoInputType = {
  id: number;
  image: string;
};

export type PickedImage = {
  uri: string;
  imageData: {
    name: string;
    type: string | null;
    uri: string;
  };
};
