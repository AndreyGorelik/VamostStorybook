import { useState } from 'react';

import CheckBox from './checkBox.component';

export default {
  title: 'CheckBox',
  component: CheckBox,
};

const Template = () => {
  const [checked, setChecked] = useState(false);

  return <CheckBox value={checked} onChange={setChecked} label={'Receive notifications'} />;
};

export const Default = Template.bind({});
