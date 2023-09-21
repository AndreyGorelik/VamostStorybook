import Background from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic from '@assets/images/postCardImages/userpic2.jpeg';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Action from '@shared/ui/action/action.component';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import Text from '@shared/ui/text/text.component';
import { removeTokens } from '@shared/utils/removeTokens';
import { useNavigation } from 'expo-router';
import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicatorComponent,
} from 'react-native';
import { logoutUser } from 'src/store/slices/auth.slice';
import { initialState, setUser } from 'src/store/slices/user.slice';

import { actions, posts } from './account.data';
import { createStyles } from './account.styles';
import { PersonalInfo } from './components/personalInfo';
import { PersonalPhotos } from './components/personalPhotos';
import { RecentMeetup } from './components/recentMeetup';

export default function Account() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { email, nickname } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={Background}
        imageStyle={styles.imageBackground}
        style={styles.imageWrapper}
      >
        <View style={styles.linearGradient}></View>
        <View style={styles.userInfo}>
          <Image source={UserPic} style={styles.image} />
          <Text variant="h3" {...styles.text} style={styles.nickname}>
            {nickname}
          </Text>
          <Text variant="common" {...styles.text}>
            {email?.toLowerCase()}
          </Text>
        </View>
      </ImageBackground>
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />
      <HeaderButton
        onPress={() => {
          dispatch(logoutUser());
          dispatch(setUser(initialState));
          removeTokens();
        }}
        icon={'logout'}
        isBackground={true}
        variant="right"
      />

      <View style={styles.userContent}>
        <View style={styles.actions}>
          {actions.map((action) => (
            <Action key={action.id} {...action} />
          ))}
        </View>
        <View style={styles.recentMeetups}>
          <Text variant="h3">Recent meetups</Text>
          <FlatList
            data={posts}
            renderItem={({ item }) => <RecentMeetup {...item} />}
            horizontal
            contentContainerStyle={styles.meetupsWrapper}
            maxToRenderPerBatch={5}
            keyExtractor={(item) => `${item.id}`}
            ListEmptyComponent={() => (
              <ActivityIndicatorComponent size="large" color={theme.colors.primary} />
            )}
          />
        </View>
        <PersonalInfo />
        <View>
          <Text variant="h3">Photos</Text>
          <PersonalPhotos />
        </View>
      </View>
    </ScrollView>
  );
}
