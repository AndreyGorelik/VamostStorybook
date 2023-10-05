import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Counter } from '@shared/ui/counter';
import Text from '@shared/ui/text/text.component';
import React, { useState } from 'react';
import { View } from 'react-native';

import { FROM_MY_SIDE, INVITE_GUESTS } from './stepThree.data';
import { createStyles } from './stepThree.styles';
import { PeopleCounter, StepThreeProps } from './stepThree.types';

const StepThree = ({ post, setPost, next }: StepThreeProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [counters, setCounters] = useState<PeopleCounter>({
    menCount: post.menCount,
    womenCount: post.womenCount,
    othersCount: post.othersCount,
    guestMenCount: post.guestMenCount,
    guestWomenCount: post.guestWomenCount,
    guestOthersCount: post.guestOthersCount,
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

      {FROM_MY_SIDE.map((item) => (
        <Counter
          key={item.key}
          title={item.title}
          count={counters[item.key]}
          increaseValue={() => handleIncrement(item.key)}
          decreaseValue={() => handleDecrement(item.key)}
        />
      ))}

      <Text variant="h4">Invite guests</Text>

      {INVITE_GUESTS.map((item) => (
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
