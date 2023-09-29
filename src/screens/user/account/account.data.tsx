import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export const POST_CARD_DATA = {
  photo: Photo,
  postName: 'Wokabily food & drinks',
};

export const posts = [
  { id: 1, data: POST_CARD_DATA },
  { id: 2, data: POST_CARD_DATA },
  { id: 3, data: POST_CARD_DATA },
];

export const actions = [
  {
    id: 3,
    Icon: <FontAwesome name="inbox" size={24} color="white" />,
    title: 'Requests',
    onPress: () => {
      return;
    },
  },
  {
    id: 4,
    Icon: <MaterialIcons size={26} name="share" color="white" />,
    title: 'Share',
    onPress: () => {
      return;
    },
  },
];
