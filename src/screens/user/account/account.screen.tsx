import Background from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic from '@assets/images/postCardImages/userpic2.jpeg';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import Action from '@shared/ui/action/action.component';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicatorComponent,
} from 'react-native';

import { posts } from './account.data';
import { createStyles } from './account.styles';
import { InfoRow } from './components/infoRow';
import { RecentMeetup } from './components/recentMeetup';

export default function Account() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { email, nickname, birthdate, gender, phoneNumber, sexualOrientation } = useAppSelector(
    (state) => state.userSlice
  );
  const navigation = useNavigation();
  const [editable, setEditable] = useState<boolean>(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      birthdate,
      gender,
      phoneNumber,
      sexualOrientation,
    },
  });

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
            {email.toLowerCase()}
          </Text>
        </View>
      </ImageBackground>
      <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />
      <HeaderButton onPress={handleBack} icon={'logout'} isBackground={true} variant="right" />
      <View style={styles.userContent}>
        <View style={styles.actions}>
          <Action
            Icon={<MaterialIcons size={26} name="share" color="white" />}
            title="Share"
            onPress={() => {
              //fff
            }}
          />
          <Action
            Icon={<AntDesign size={26} name="heart" color="white" />}
            title="Favorite"
            onPress={() => {
              //fff
            }}
          />
          <Action
            Icon={<Ionicons name="chatbubble-ellipses" size={24} color="white" />}
            title="Chat"
            onPress={() => {
              //fff
            }}
          />
          <Action
            Icon={<MaterialIcons name="business-center" size={24} color="white" />}
            title="Request"
            onPress={() => {
              //fff
            }}
          />
        </View>
        <View style={styles.recentMeetups}>
          <Text variant="h3">Recent meetups</Text>
          <FlatList
            data={posts}
            renderItem={({ item }) => <RecentMeetup {...item} />}
            horizontal
            contentContainerStyle={styles.meetupsWrapper}
            maxToRenderPerBatch={5}
            ListEmptyComponent={() => (
              <ActivityIndicatorComponent size="large" color={theme.colors.primary} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
