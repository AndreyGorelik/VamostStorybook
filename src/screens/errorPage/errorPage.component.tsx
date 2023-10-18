import useTheme from '@shared/hooks/useTheme.hook';
import { HeaderButton } from '@shared/ui/bottomSheet/components/headerButton';
import { Button } from '@shared/ui/button';
import Text from '@shared/ui/text/text.component';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';

import { createStyles } from './errorPage.styles';
import { ErrorPageProps } from './errorPage.types';

export default function ErrorPage({ retry, error, backButton = true }: ErrorPageProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.wrapper}>
      {backButton && (
        <HeaderButton onPress={handleBack} icon={'arrow-back'} isBackground={true} variant="left" />
      )}
      <Text variant="h3" style={styles.text}>
        {error}
      </Text>
      <View style={styles.button}>
        <Button title="Retry" onPress={retry} width="80%" />
      </View>
    </View>
  );
}
