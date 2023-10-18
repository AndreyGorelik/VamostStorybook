import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { Action } from '@shared/ui/action';
import { View } from 'react-native';

import { createStyles } from './controlButtons.styles';
import { ControlButtonsProps } from './controlButtons.types';

const ICONS_SIZE = 26;

const ControlButtons: React.FC<ControlButtonsProps> = ({
  addNew,
  edit,
  share,
  watchRequests,
  editMode,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.actions}>
      <Action
        Icon={<AntDesign size={ICONS_SIZE} name="pluscircle" color={theme.colors.secondary} />}
        title="New"
        onPress={addNew}
      />
      <Action
        Icon={<MaterialIcons name="edit" size={ICONS_SIZE} color={theme.colors.secondary} />}
        title={editMode ? 'Cancel' : 'Edit'}
        onPress={edit}
      />
      <Action
        Icon={<MaterialIcons name="share" size={ICONS_SIZE} color={theme.colors.secondary} />}
        title="Share"
        onPress={share}
      />
      <Action
        Icon={<FontAwesome name="inbox" size={ICONS_SIZE} color={theme.colors.secondary} />}
        title="Requests"
        onPress={watchRequests}
      />
    </View>
  );
};

export default ControlButtons;
