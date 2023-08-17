import { useState } from 'react';

import BirthdayInput from './birthdayInput.component';

export default {
  title: 'BirthdayInput',
  component: BirthdayInput,
};

const Template = () => {
  const [, setInfo] = useState('');

  return <BirthdayInput onChange={(info) => setInfo(info)} />;
};

export const Default = Template.bind({});
