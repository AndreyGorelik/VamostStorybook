import { ModalSelectVenue } from '@shared/ui/modalSelectVenue';
import { SelectCity } from '@shared/ui/selectCity';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Place } from 'src/types/actions/actions.types';

import useTheme from '../../../../hooks/useTheme.hook';
import { Button } from '../../../button';
import { OutlinedButton } from '../../../outlinedBtn';
import { PostDateAndTime } from '../../../postDateAndTime';
import { TagList } from '../../../tagList';
import Text from '../../../text/text.component';

import { TAG_LIST_DATA } from './stepTwo.data';
import { createStyles } from './stepTwo.styles';
import { StepTwoProps } from './stepTwo.types';

export default function StepTwo({ post, setPost, next, setPlaceId }: StepTwoProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [date, setDate] = useState(post.date);
  const [selectedTagList, setSelectedTagList] = useState<string[]>(post.tags);
  const [descriptionVisible, setDescriptionVisible] = useState(post.description || false);
  const [location, setLocation] = useState(post.location);
  const [venue, setVenue] = useState<Place | null>(null);
  const [description, setDescription] = useState(post.description);
  const [openCitySelectList, setOpenCitySelectList] = useState(false);
  const [openPlacesSelectList, setOpenPlacesSelectList] = useState(false);

  const changeDescriptionVisibility = () => {
    setDescription('');
    setDescriptionVisible(!descriptionVisible);
  };

  const saveAndGoAhead = () => {
    if (!venue) return;

    setPost({
      ...post,
      date,
      description,
      tags: selectedTagList,
      location,
      venue: venue.name,
    });
    next();
  };

  const selectTags = (tags: string[]) => {
    tags.forEach((tag) => {
      if (!venue?.tags.includes(tag)) {
        setVenue(null);
      }
    });

    setSelectedTagList(tags);
  };

  const selectCity = (city: string) => {
    setVenue(null);
    setLocation(city);
  };

  const selectDate = (date: Date) => {
    setVenue(null);
    setDate(date);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text>When:</Text>
        <PostDateAndTime date={date} setDate={selectDate} />
      </View>
      <View style={styles.row}>
        <Text>Where:</Text>
        <OutlinedButton
          title={location}
          borderRadius={25}
          width={150}
          height={40}
          onPress={() => setOpenCitySelectList(true)}
        />
      </View>
      <View style={styles.row}>
        <Text>What:</Text>
        <TagList
          selectedList={selectedTagList}
          setSelectedList={selectTags}
          tagsList={TAG_LIST_DATA}
        />
      </View>
      {!selectedTagList.length && <Text variant="warning">Choose at least one tag</Text>}
      <View style={styles.row}>
        <Text>Venue:</Text>
        <OutlinedButton
          title={venue ? venue.name : 'Select...'}
          borderRadius={25}
          width={150}
          height={40}
          onPress={() => setOpenPlacesSelectList(true)}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={changeDescriptionVisibility}>
        <Text color={theme.colors.textLink}>
          {descriptionVisible ? '- Cancel' : '+ Add description'}
        </Text>
      </TouchableOpacity>
      <View>
        {descriptionVisible && (
          <TextInput value={description} onChangeText={setDescription} style={styles.input} />
        )}
      </View>
      <Button
        title="Next"
        disabled={
          date < new Date() || selectedTagList.length === 0
            ? true
            : false || !venue || !description.length
        }
        onPress={saveAndGoAhead}
      />
      <SelectCity open={openCitySelectList} setOpen={setOpenCitySelectList} setCity={selectCity} />
      <ModalSelectVenue
        location={location}
        open={openPlacesSelectList}
        setOpen={setOpenPlacesSelectList}
        setVenue={setVenue}
        setPlaceId={setPlaceId}
      />
    </View>
  );
}
