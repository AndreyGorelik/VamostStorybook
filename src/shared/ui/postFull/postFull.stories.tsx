import PostFull from './postFull.component';
import { POST_FULL_DATA } from './postFull.data';

export default {
  title: 'PostFull',
  component: PostFull,
};

const Template = () => {
  return <PostFull data={POST_FULL_DATA} />;
};

export const Default = Template.bind({});
