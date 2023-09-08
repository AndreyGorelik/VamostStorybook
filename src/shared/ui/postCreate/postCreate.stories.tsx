import { useState } from 'react';

import Button from '../button/button.component';

import PostCreate from './postCreate.component';

export default {
  title: 'PostCreate',
  component: PostCreate,
};

const Template = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button title="open" onPress={() => setOpen(true)} />
      <PostCreate open={open} setOpen={setOpen} />
    </>
  );
};

export const Default = Template.bind({});
