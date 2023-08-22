import PostFullGuest from './postFullGuest.component';
import { POST_FULL_GUEST_DATA } from './postFullGuest.data';

export default {
  title: 'PostFullGuest',
  component: PostFullGuest,
};

const Template = () => {
  return <PostFullGuest data={POST_FULL_GUEST_DATA} />;
};

export const Default = Template.bind({});
