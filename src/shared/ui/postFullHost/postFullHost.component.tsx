import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ImageBackground } from 'react-native';

import formatWholeDate from '../../../utils/convertTime/formatWholeDate';
import Button from '../button/button.component';
import HostingLabel from '../hostingLabel/hostingLabel.component';
import Request from '../request/request.component';
import Text from '../text/text.component';
import UserPicGallery from '../userpicGallery/userPicGallery.component';

import { styles } from './postFullHost.styles';
import { PostFullHostProps, PostTag, RequestProps } from './postFullHost.types';

export default function PostFullHost({ data }: { data: PostFullHostProps }) {
  return (
    <>
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
        <View style={styles.textOnPhoto}>
          <View style={styles.textHeader}>
            <Text variant="h3" color="white">
              {data.post_name}
            </Text>
            <Text variant="h5" color="white">
              {formatWholeDate(data.start_date)}
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
          {data.post_tags.map((item: PostTag) => {
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
            {data?.guest_male_count > 0 ? ' +' + data.guest_male_count.toString() + ' men' : '0'}
          </Text>
          <Text>Guest invited: +{data.guests.length.toString()} women</Text>
        </View>

        <View style={styles.actionButtons}>
          <Button title={'Confirm & Lock'} />
          <Button title={'Change'} />
          <Button title={'Cancel'} />
        </View>

        <View style={styles.requestsList}>
          {data.requests.map((item: RequestProps) => {
            return <Request key={item.id} data={item} />;
          })}
        </View>
      </View>
    </>
  );
}
