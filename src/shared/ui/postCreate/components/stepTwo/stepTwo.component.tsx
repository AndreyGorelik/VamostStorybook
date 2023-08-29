import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import useTheme from '../../../../hooks/useTheme.hook';
import { Button } from '../../../button';
import TextInput from '../../../input/input.component';
import { OutlinedButton } from '../../../outlinedBtn';
import { PostDateAndTime } from '../../../postDateAndTime';
import { TagList } from '../../../tagList';
import Text from '../../../text/text.component';

import { TAG_LIST_DATA } from './stepTwo.data';
import { createStyles } from './stepTwo.styles';

export default function StepTwo({ post, setPost, next }) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [date, setDate] = useState(() => {
    return new Date(Date.now() + 24 * 60 * 60 * 1000);
  });
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [location] = useState('Miami FL');
  const [description, setDescription] = useState('');
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  useEffect(() => {
    if (date < new Date()) {
      setNextBtnDisabled(true);
    } else {
      setNextBtnDisabled(false);
    }
  }, [date]);

  const changeDescriptionVisibility = () => {
    setDescription('');
    setDescriptionVisible(!descriptionVisible);
  };

  const saveAndGoAhead = () => {
    setPost({
      ...post,
      date,
      description,
      tags: selectedTagList,
      location,
    });
    next();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text>When:</Text>
        <PostDateAndTime date={date} setDate={setDate} />
      </View>
      <View style={styles.row}>
        <Text>Where:</Text>
        <Text>{location}</Text>
      </View>
      <View style={styles.row}>
        <Text>What:</Text>
        <TagList
          selectedList={selectedTagList}
          setSelectedList={setSelectedTagList}
          tagsList={TAG_LIST_DATA}
        />
      </View>
      <View style={styles.row}>
        <Text>Where:</Text>
        <OutlinedButton title="Select..." borderRadius={25} width={150} onPress={() => {}} />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={changeDescriptionVisibility}>
        <Text color={theme.colors.textLink}>
          {descriptionVisible ? '- Cancel' : '+ Add description (optional)'}
        </Text>
      </TouchableOpacity>
      <View>
        {descriptionVisible && (
          <TextInput multiline={true} value={description} onChangeText={setDescription} />
        )}
      </View>
      <Button title="Next" disabled={nextBtnDisabled} onPress={saveAndGoAhead} />
    </View>
  );
}
