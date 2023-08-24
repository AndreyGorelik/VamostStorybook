import { USERPIC_GALLERY_DATA } from './userPicGallery.data';
import UserPicGallery from './userPicGallery.component';
export default {
  title: 'UserPicGallery',
  component: UserPicGallery,
};

const Template = () => {
  return <UserPicGallery data={USERPIC_GALLERY_DATA} />;
};

export const Default = Template.bind({});
