import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ImageBackground, ScrollView, Alert } from 'react-native';

import useTheme from '../../../shared/hooks/useTheme.hook';
import { HostingLabel } from '../../../shared/ui/hostingLabel';
import { OutlinedButton } from '../../../shared/ui/outlinedBtn';
import { Request } from '../../../shared/ui/request';
import Text from '../../../shared/ui/text/text.component';
import { UserPicGallery } from '../../../shared/ui/userpicGallery';

import { POST_FULL_HOST_DATA } from './postFullHost.data';
import { createStyles } from './postFullHost.styles';
import { PostTag, RequestProps } from './postFullHost.types';

export default function PostFullHost() {
  const data = POST_FULL_HOST_DATA;
  const theme = useTheme();
  const styles = createStyles(theme);
  const confirmRequest = () => {
    Alert.alert('confirm');
  };
  const changeRequest = () => {
    Alert.alert('change');
  };
  const cancelRequest = () => {
    Alert.alert('cancel');
  };
  const deleteRequest = () => {
    Alert.alert('delete');
  };

  return (
    <ScrollView style={styles.scrollWrapper}>
      <View style={styles.header}>
        <ImageBackground
          imageStyle={styles.postCardCover}
          source={data.photo}
          style={styles.photoContainer}
        >
          <LinearGradient
            colors={[theme.colors.gradientStart, theme.colors.gradientFinish]}
            style={styles.linearGradient}
          ></LinearGradient>
        </ImageBackground>
        <View style={styles.textOnPhoto}>
          <View style={styles.textHeader}>
            <Text variant="h3" color={theme.colors.secondary}>
              {data.postName}
            </Text>
            <Text variant="h5" color={theme.colors.secondary}>
              {format(data.startDate, 'MMMM d, yyyy, h:mm a')}
            </Text>
          </View>
          <HostingLabel />
        </View>

        <View style={styles.guests}>
          <Text>My guests:</Text>
          <UserPicGallery data={data.guests} size={65} />
          <Text>(2 left)</Text>
        </View>
      </View>
      <View style={styles.postInfo}>
        <View style={styles.tags}>
          {data.postTags.map((item: PostTag) => {
            return (
              <View key={item.id} style={styles.tagItem}>
                <Image source={item.icon} style={styles.tagIcons} />
                <Text>{item.label}</Text>
              </View>
            );
          })}
        </View>

        <View>
          <Text variant="h5" margin={10}>
            Guest(s)
          </Text>
          <Text>
            From my side:
            {data?.guestMaleCount > 0 ? ' +' + data.guestMaleCount.toString() + ' men' : '0'}
          </Text>
          <Text>Guest invited: +{data.guests.length.toString()} women</Text>
        </View>

        <View style={styles.actionButtons}>
          <OutlinedButton
            title={'Confirm & Lock'}
            borderRadius={15}
            height={30}
            onPress={confirmRequest}
            fontSize={12}
            flex={1}
          />
          <OutlinedButton
            title={'Change'}
            borderRadius={15}
            height={30}
            onPress={changeRequest}
            fontSize={12}
            flex={1}
          />
          <OutlinedButton
            title={'Cancel'}
            borderRadius={15}
            height={30}
            onPress={cancelRequest}
            fontSize={12}
            flex={1}
          />
        </View>

        <View style={styles.requestsList}>
          {data.requests.map((item: RequestProps) => {
            return (
              <Request
                key={item.id}
                data={item}
                confirmRequest={confirmRequest}
                deleteRequest={deleteRequest}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
