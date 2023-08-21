import { useState } from 'react';

import CodeInput from './codeInput.component';

export default {
  title: 'CodeInput',
  component: CodeInput,
};

const Template = () => {
  const [, setInfo] = useState('');

  return <CodeInput onChange={(info) => setInfo(info)} />;
};

export const Default = Template.bind({});
