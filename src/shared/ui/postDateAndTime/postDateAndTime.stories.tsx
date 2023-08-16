import { useState } from 'react';

import PostDateAndTime from './postDateAndTime.component';

export default {
  title: 'PostDateAndTime',
  component: PostDateAndTime,
};

const Template = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <PostDateAndTime date={date} setDate={setDate} />;
};

export const Default = Template.bind({});
