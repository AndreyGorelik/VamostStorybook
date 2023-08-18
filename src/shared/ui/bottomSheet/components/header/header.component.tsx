import { View } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import Text from '../../../text/text.component';
import { HeaderButton } from '../headerButton';

import { createStyles } from './header.styles';
import { HeaderProps } from './header.types';

export default function Header({
  title,
  leftIconName,
  leftIconPress,
  rightIconName,
  rightIconPress,
}: HeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      {leftIconName && <HeaderButton onPress={leftIconPress} icon={leftIconName} variant="left" />}

      <Text variant="h3" {...styles.headerText}>
        {title}
      </Text>
      {rightIconName && (
        <HeaderButton onPress={rightIconPress} icon={rightIconName} variant="right" />
      )}
    </View>
  );
}
