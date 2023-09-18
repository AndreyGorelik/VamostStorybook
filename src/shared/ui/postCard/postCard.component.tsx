import useTheme from '@shared/hooks/useTheme.hook';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { PostResponse } from 'src/types/actions/actions.types';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

import { createStyles } from './postCard.styles';

export default function PostCard(props: PostResponse) {
  const theme = useTheme();
  const styles = createStyles(theme);

  function formatDate(date: string) {
    try {
      const formattedDate = format(new Date(date), 'MMMM d, yyyy, h:mm a');
      return formattedDate;
    } catch {
      return '';
    }
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.photoContainer}>
        <View>
          <ImageBackground
            imageStyle={styles.photoContainer}
            source={{
              uri: props.imageUrl,
            }}
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
            {props.venue}
          </Text>
          <Text variant="h6" color={theme.colors.background}>
            {props.location}
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text variant="h5" noMargin={true}>
            {formatDate(props.date)}
          </Text>
        </View>
        <View>
          <View style={styles.row}>
            {props.tags.map((item, index, array) => {
              const isLastElement = index === array.length - 1;
              const separator = array.length > 2 ? ', ' : ' & ';
              return (
                <Text variant="disabled" key={item}>
                  {isLastElement ? item + ', ' : item + separator}
                </Text>
              );
            })}
            <Text variant="disabled">
              {(props.guestWomenCount + props.guestMenCount + props.guestOthersCount).toString()}{' '}
              guests
            </Text>
          </View>
          <View style={styles.rowSpaceBetween}>
            <Link
              href={{
                pathname: '/profileslist',
                params: { guests: JSON.stringify(props.guests) },
              }}
            >
              <UserPicGallery data={props.guests} />
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
