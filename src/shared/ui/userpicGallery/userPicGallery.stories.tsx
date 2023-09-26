import UserPicGallery from './userPicGallery.component';
import { USERPIC_GALLERY_DATA } from './userPicGallery.data';
export default {
  title: 'UserPicGallery',
  component: UserPicGallery,
};

const Template = () => {
  return <UserPicGallery data={USERPIC_GALLERY_DATA} />;
};

export const Default = Template.bind({});
