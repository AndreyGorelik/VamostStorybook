import PostFullHost from './postFullHost.component';
import { POST_FULL_HOST_DATA } from './postFullHost.data';

export default {
  title: 'PostFullHost',
  component: PostFullHost,
};

const Template = () => {
  return <PostFullHost data={POST_FULL_HOST_DATA} />;
};

export const Default = Template.bind({});
