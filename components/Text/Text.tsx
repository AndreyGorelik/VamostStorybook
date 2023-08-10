import { View, Text as NativeText } from 'react-native';

import { styles } from './styles';

interface TextI {
  id: string;
  title: string;
  variant: string;
  state: string;
}

export const Text = ({ text: { title, variant, ...rest } }: { text: TextI }) => {
  const settings = {
    fontSize: 17,
    marginVertical: 5,
    color: 'black',
    fontWeight: '400',
    padding: 0,
  };

  switch (variant) {
    case 'h1':
      settings.fontSize = 40;
      settings.marginVertical = 15;
      settings.fontWeight = '600';
      break;
    case 'h2':
      settings.fontSize = 30;
      settings.marginVertical = 13;
      settings.fontWeight = '600';
      break;
    case 'h3':
      settings.fontSize = 25;
      settings.marginVertical = 11;
      settings.fontWeight = '500';
      break;
    case 'h4':
      settings.fontSize = 21;
      settings.marginVertical = 11;
      settings.fontWeight = '500';
      break;
    case 'h5':
      settings.fontSize = 18;
      settings.marginVertical = 8;
      settings.fontWeight = '500';
      break;
    case 'h6':
      settings.fontSize = 15;
      settings.marginVertical = 6;
      settings.fontWeight = '500';
      break;
    case 'warning':
      settings.fontSize = 13;
      settings.marginVertical = 3;
      settings.fontWeight = '500';
      settings.color = 'red';
      break;
    case 'medium':
      settings.fontSize = 20;
      settings.marginVertical = 5;
      break;
    case 'disabled':
      settings.color = 'gray';
      break;
    default:
      break;
  }
  return (
    <View>
      <NativeText style={[styles.default, settings]} {...rest}>
        {title}
      </NativeText>
    </View>
  );
};
