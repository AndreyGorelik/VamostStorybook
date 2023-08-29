import React, { useState } from 'react';
import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import { Button } from '../../../button';
import { Counter } from '../../../counter';
import Text from '../../../text/text.component';

import { createStyles } from './stepThree.styles';
import { PeopleCounter } from './stepThree.types';

const counterConfigs = [
  { key: 'menCount', title: 'men' },
  { key: 'womenCount', title: 'women' },
  { key: 'otherCount', title: 'OTHER' },
  { key: 'guestsMenCount', title: 'men' },
  { key: 'guestsWomenCount', title: 'women' },
  { key: 'guestsOtherCount', title: 'OTHER' },
];

const StepThree = ({ post, setPost, next }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [counters, setCounters] = useState<PeopleCounter>({
    menCount: 1,
    womenCount: 0,
    otherCount: 0,
    guestsMenCount: 0,
    guestsWomenCount: 0,
    guestsOtherCount: 0,
  });

  const handleIncrement = (key: keyof PeopleCounter) => {
    setCounters({ ...counters, [key]: counters[key] + 1 });
  };

  const handleDecrement = (key: keyof PeopleCounter) => {
    if (counters[key] > 0) {
      setCounters({ ...counters, [key]: counters[key] - 1 });
    }
  };

  const saveAndGoAhead = () => {
    setPost({
      ...post,
      ...counters,
    });
    next();
  };

  return (
    <View style={styles.wrapper}>
      <Text variant="h4">From my side</Text>

      {counterConfigs.map((item) => (
        <Counter
          key={item.key}
          title={item.title}
          count={counters[item.key]}
          increaseValue={() => handleIncrement(item.key)}
          decreaseValue={() => handleDecrement(item.key)}
        />
      ))}

      <Button title="Next" onPress={saveAndGoAhead} />
    </View>
  );
};

export default StepThree;
