import useTheme from '@shared/hooks/useTheme.hook';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { View, TouchableOpacity, ImageBackground, Alert } from 'react-native';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

import { createStyles } from './postCard.styles';
import { PostCardProps } from './postCard.types';

export default function PostCard({ data }: { data: PostCardProps }) {
  // console.log(data);

  const theme = useTheme();
  const styles = createStyles(theme);
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
              colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
              style={styles.linearGradient}
            ></LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.imageInfo}>
          <Text variant="h4" noMargin={true} color={theme.colors.background}>
            {data.postName}
          </Text>
          <Text variant="h6" color={theme.colors.background}>
            {data.venueLocation} • {data.venueName}
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text variant="h5" noMargin={true}>
            {format(data.startDate, 'MMMM d, yyyy, h:mm a')}
          </Text>
        </View>
        <View>
          <View style={styles.row}>
            {data.postTags.map((item, index, array) => {
              const isLastElement = index === array.length - 1;
              const separator = array.length > 2 ? ', ' : ' & ';
              return (
                <Text variant="disabled" key={item.id}>
                  {isLastElement ? item.tag + ', ' : item.tag + separator}
                </Text>
              );
            })}
            <Text variant="disabled">
              {(data.guestFemaleCount + data.guestMaleCount + data.guestOtherCount).toString()}{' '}
              guests
            </Text>
          </View>
          <View style={styles.rowSpaceBetween}>
            <Link
              href={{
                pathname: '/profilesList/',
                params: { postId: data },
              }}
            >
              <UserPicGallery data={data.guests} />
            </Link>
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
