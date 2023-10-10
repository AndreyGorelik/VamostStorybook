import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Counter } from '@shared/ui/counter';
import Text from '@shared/ui/text/text.component';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { FROM_MY_SIDE, HOST_GENDERS, INVITE_GUESTS } from './stepThree.data';
import { createStyles } from './stepThree.styles';
import { PeopleCounter, StepThreeProps } from './stepThree.types';

const StepThree = ({ post, setPost, next }: StepThreeProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const initialGuests = {
    menCount: post.menCount,
    womenCount: post.womenCount,
    othersCount: post.othersCount,
    guestMenCount: post.guestMenCount,
    guestWomenCount: post.guestWomenCount,
    guestOthersCount: post.guestOthersCount,
  };

  const [counters, setCounters] = useState<PeopleCounter>(initialGuests);

  const handleIncrement = (key: keyof PeopleCounter) => {
    setCounters({ ...counters, [key]: counters[key] + 1 });
  };

  const handleDecrement = (key: keyof PeopleCounter) => {
    if (counters[key] > 0) {
      setCounters({ ...counters, [key]: counters[key] - 1 });
    }
  };

  const handleHostGender = (key: keyof PeopleCounter) => {
    setCounters({ ...initialGuests, [key]: 1 });
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
      {post.hostType === 'Host' && (
        <>
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
        </>
      )}

      {post.hostType === 'Guest' && (
        <>
          <Text variant="h4">Select Host gender</Text>

          {HOST_GENDERS.map((gender) => (
            <Pressable
              style={({ pressed }) => [
                styles.listItem,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
              key={gender.id}
              onPress={() => handleHostGender(gender.id)}
            >
              <Text
                variant="h5"
                color={counters[gender.id] ? theme.colors.selected : theme.colors.text}
              >
                {gender.label}
              </Text>
            </Pressable>
          ))}
        </>
      )}

      <Button title="Next" onPress={saveAndGoAhead} />
    </View>
  );
};

export default StepThree;
