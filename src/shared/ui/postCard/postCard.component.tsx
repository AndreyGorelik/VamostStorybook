import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

import formatWholeDate from '../../../utils/convertTime/formatWholeDate';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

interface PostTag {
  tag: string;
  id: string;
}

export interface PostGuests {
  guestPhoto: ImageSourcePropType;
  id: string;
}

interface PostCardProps {
  photo: ImageSourcePropType;
  post_tags: PostTag[];
  start_date: Date;
  start_time: Date;
  venue_name: string;
  venue_location: string;
  post_name: string;
  guest_male_count: number;
  guest_female_count: number;
  guest_other_count: number;
  guests: PostGuests[];
}

export default function PostCard({ data }: { data: PostCardProps }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.photoContainer}>
        <View>
          <ImageBackground
            imageStyle={styles.photoContainer}
            source={data.photo}
            style={styles.postCardCover}
          >
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.73)']}
              style={styles.linearGradient}
            ></LinearGradient>
          </ImageBackground>
        </View>
        <View style={{ position: 'absolute', bottom: 0, padding: 10 }}>
          <Text variant="h4" noMargin={true} color="white">
            {data.post_name}
          </Text>
          <Text variant="h6" color="white">
            {data.venue_location} • {data.venue_name}
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text variant="h5" noMargin={true}>
            {formatWholeDate(data.start_date)}
          </Text>
        </View>
        <View>
          <View style={styles.row}>
            {data.post_tags.map((item, index, array) => {
              const isLastElement = index === array.length - 1;
              const separator = array.length > 2 ? ', ' : ' & ';
              return (
                <Text variant="disabled" key={item.id}>
                  {isLastElement ? item.tag + ', ' : item.tag + separator}
                </Text>
              );
            })}
            <Text variant="disabled">
              {(
                data.guest_female_count +
                data.guest_male_count +
                data.guest_other_count
              ).toString()}{' '}
              guests
            </Text>
          </View>
          <UserPicGallery data={data.guests} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  postCardCover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  photoContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
  },
});
