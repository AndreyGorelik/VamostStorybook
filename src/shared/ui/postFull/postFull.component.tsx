import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Image, ImageSourcePropType, ImageBackground } from 'react-native';

import { PostGuests } from '../postCard/postCard.component';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';
import formatWholeDate from '../../../utils/convertTime/formatWholeDate';
interface PostTag {
  tag: string;
  id: string;
}

interface PostFullProps {
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

export default function PostFull({ data }: { data: PostFullProps }) {
  return (
    <View style={styles.header}>
      <ImageBackground
        imageStyle={styles.postCardCover}
        source={data.photo}
        style={styles.photoContainer}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.33)', 'rgba(0, 0, 0, 0.73)']}
          style={styles.linearGradient}
        ></LinearGradient>
      </ImageBackground>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text variant="h3" color="white">
          {data.post_name}
        </Text>
        <Text variant="h5" color="white">
          {formatWholeDate(data.start_date)}
        </Text>
      </View>

      <View style={styles.guests}>
        <Text>My guests:</Text>
        <UserPicGallery data={data.guests} size={65} />
        <Text>(2 left)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postCardCover: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  photoContainer: {
    width: '100%',
    height: 250,
  },
  guests: {
    flex: 1,
    flexDirection: 'row',
    bottom: -35,
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
  },
});
