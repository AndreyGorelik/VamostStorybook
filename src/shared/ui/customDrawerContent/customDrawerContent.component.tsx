import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import useTheme from '@shared/hooks/useTheme.hook';
import { SafeAreaView } from 'react-native';

import Divider from '../divider/divider.component';
import { UserMenu } from '../userMenu';

import { createStyles } from './customDrawerContent.styles';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.wrapper}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.contentWrapper}>
        <UserMenu />
        <Divider />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
