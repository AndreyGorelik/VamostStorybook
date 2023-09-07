import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

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
    id: 1,
    title: 'New',
    onPress: () => {},
    Icon: <AntDesign size={26} name="pluscircle" color="white" />,
  },
  {
    id: 2,
    Icon: <MaterialIcons name="edit" size={24} color="white" />,
    title: 'Edit',
    onPress: () => {},
  },
  {
    id: 3,
    Icon: <Ionicons name="people" size={24} color="white" />,
    title: 'Friends',
    onPress: () => {},
  },
  {
    id: 4,
    Icon: <MaterialIcons size={26} name="share" color="white" />,
    title: 'Share',
    onPress: () => {},
  },
];
