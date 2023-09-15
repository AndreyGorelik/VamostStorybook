import useTheme from '@shared/hooks/useTheme.hook';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { createStyles } from './Requests.styles';
import { useState } from 'react';
import { All } from './components/All';
import { Deleted } from './components/Deleted';
import { Pending } from './components/Pending';
import { tabs } from './Requests.data';
import { RequestsProps } from './Requests.types';
import Divider from '@shared/ui/divider/divider.component';

export default function Requests({ postId }: RequestsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [index, setIndex] = useState<number>(1);

  function confirmRequest() {}
  function deleteRequest() {}

  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {tabs.map((tab) => (
          <Pressable key={tab.id} onPress={() => setIndex(tab.id)} style={styles.tab}>
            <Text style={index === tab.id ? [styles.text, styles.selected] : styles.text}>
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Divider />
      {index === 1 && (
        <Pending id={postId} confirmRequest={confirmRequest} deleteRequest={deleteRequest} />
      )}
      {index === 2 && (
        <Deleted id={postId} confirmRequest={confirmRequest} deleteRequest={deleteRequest} />
      )}
      {index === 3 && (
        <All id={postId} confirmRequest={confirmRequest} deleteRequest={deleteRequest} />
      )}
    </View>
  );
}
