import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { PostResponse } from 'src/types/actions/actions.types';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

import { createStyles } from './postCard.styles';
import { ButtonStyles } from './postCard.types';

export default function PostCard(props: PostResponse) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const btnStyle: ButtonStyles = {
    Active: {
      title: 'Locked',
      color: theme.colors.postStatus.confirmed,
    },
    New: {
      title: 'Unlocked',
      color: theme.colors.postStatus.created,
    },
    Cancelled: {
      title: 'Cancelled',
      color: theme.colors.postStatus.canceled,
    },
    Complete: {
      title: 'Completed',
      color: theme.colors.postStatus.completed,
    },
  };

  function formatDate(date: string) {
    try {
      const formattedDate = format(new Date(date), 'MMMM d, yyyy, h:mm a');
      return formattedDate;
    } catch {
      return '';
    }
  }

  function handleNavigate() {
    router.push(`posts/${props._id}`);
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleNavigate}>
      <View style={styles.photoContainer}>
        <View>
          <ImageBackground
            imageStyle={styles.photoContainer}
            source={{
              uri: props.images[0] && getImagePath(props.images[0]),
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
            {props.tags?.map((item, index, array) => {
              const isLastElement = index === array.length - 1;
              const separator = array.length > 2 ? ', ' : ' & ';
              return (
                <Text variant="disabled" key={item}>
                  {isLastElement ? item + ', ' : item + separator}
                </Text>
              );
            })}
            <Text variant="disabled">
              {`${props.guestWomenCount + props.guestMenCount + props.guestOthersCount}`} guests
            </Text>
          </View>
          <View style={styles.rowSpaceBetween}>
            <UserPicGallery data={props.members} />
            <OutlinedButton
              height={40}
              width={100}
              {...btnStyle[props.postStatus]}
              disabled
              noDisableStyle
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
