import PostCard from './postCard.component';
import { POST_CARD_DATA } from './postCard.data';

export default {
  title: 'PostCard',
  component: PostCard,
};

const Template = () => {
  return <PostCard data={POST_CARD_DATA} />;
};

export const Default = Template.bind({});
