import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, ImageBackground, Alert } from 'react-native';

import formatWholeDate from '../../../utils/convertTime/formatWholeDate';
import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

import { styles } from './postCard.styles';
import { PostCardProps } from './postCard.types';

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
          <View style={styles.rowSpaceBetween}>
            <UserPicGallery data={data.guests} />
            <OutlinedButton
              title={'Lock'}
              onPress={() => Alert.alert('press')}
              height={40}
              width={100}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
