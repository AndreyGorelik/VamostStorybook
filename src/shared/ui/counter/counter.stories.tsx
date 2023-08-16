import { useState } from 'react';

import Counter from './counter.component';

export default {
  title: 'Counter',
  component: Counter,
};

const Template = () => {
  const [count, setCount] = useState(0);

  return (
    <Counter
      count={count}
      increaseValue={() => setCount(count + 1)}
      decreaseValue={() => setCount(count === 0 ? 0 : count - 1)}
    />
  );
};

export const Default = Template.bind({});
