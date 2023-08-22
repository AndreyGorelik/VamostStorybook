import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

import { CustomText } from './text.types';

function Text({ children, variant, color, margin, width, align, fontSize, ...rest }: CustomText) {
  const settings: TextStyle = {
    fontSize: 17,
    padding: 0,
    color,
    marginVertical: margin ? 5 : 0,
    width,
    textAlign: align,
  };

  switch (variant) {
    case 'h1':
      settings.fontSize = 40;
      settings.marginVertical = 15;
      settings.fontWeight = '700';
      break;
    case 'h2':
      settings.fontSize = 35;
      settings.marginVertical = margin ? 13 : 0;
      settings.fontWeight = '700';
      break;
    case 'h3':
      settings.fontSize = 25;
      settings.marginVertical = margin ? 11 : 0;
      settings.fontWeight = '600';
      break;
    case 'h4':
      settings.fontSize = 21;
      settings.marginVertical = margin ? 10 : 0;
      settings.fontWeight = '600';
      break;
    case 'h5':
      settings.fontSize = 18;
      settings.marginVertical = margin ? 5 : 0;
      settings.fontWeight = '600';
      break;
    case 'h6':
      settings.fontSize = 15;
      settings.marginVertical = margin ? 8 : 0;
      settings.fontWeight = '500';
      break;
    case 'common':
      settings.fontSize = fontSize ? fontSize : 15;
      settings.marginVertical = margin ? 8 : 0;
      settings.fontWeight = '400';
      break;
    case 'small':
      settings.fontSize = 13;
      settings.marginVertical = margin ? 8 : 0;
      settings.fontWeight = '400';
      settings.lineHeight = 21;
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
    <NativeText style={[styles.text, settings]} {...rest}>
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
  },
});

export default Text;
