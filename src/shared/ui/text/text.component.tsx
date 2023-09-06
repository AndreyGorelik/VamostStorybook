import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

import { CustomText } from './text.types';

function Text({
  children,
  variant,
  color,
  margin,
  noMargin,
  width,
  align,
  fontSize,
  style,
  ...rest
}: CustomText) {
  const settings: TextStyle = {
    fontSize: fontSize ?? 17,
    padding: 0,
    color,
    marginVertical: noMargin ? 0 : margin ? margin : 5,
    width,
    textAlign: align,
  };

  switch (variant) {
    case 'h1':
      settings.fontSize = fontSize ?? 40;
      noMargin ? 0 : margin ? margin : 15;
      settings.fontWeight = '700';
      break;
    case 'h2':
      settings.fontSize = fontSize ?? 30;
      noMargin ? 0 : margin ? margin : 13;
      settings.fontWeight = '700';
      break;
    case 'h3':
      settings.fontSize = fontSize ?? 25;
      settings.marginVertical = noMargin ? 0 : margin ? margin : 11;
      settings.fontWeight = '600';
      break;
    case 'h4':
      settings.fontSize = fontSize ?? 21;
      settings.marginVertical = noMargin ? 0 : margin ? margin : 10;
      settings.fontWeight = '600';
      break;
    case 'h5':
      settings.fontSize = fontSize ?? 18;
      settings.marginVertical = noMargin ? 0 : margin ? margin : 5;
      settings.fontWeight = '600';
      break;
    case 'h6':
      settings.fontSize = fontSize ?? 15;
      settings.marginVertical = noMargin ? 0 : margin ? margin : 8;
      settings.fontWeight = '500';
      break;
    case 'common':
      settings.fontSize = fontSize ?? 15;
      settings.marginVertical = margin ? 8 : 0;
      settings.fontWeight = '400';
      break;
    case 'small':
      settings.fontSize = fontSize ?? 13;
      settings.marginVertical = margin ? 8 : 0;
      settings.fontWeight = '400';
      settings.lineHeight = 21;
      break;
    case 'warning':
      settings.fontSize = fontSize ?? 13;
      settings.marginVertical = 3;
      settings.fontWeight = '500';
      settings.color = 'red';
      break;
    case 'medium':
      settings.fontSize = fontSize ?? 20;
      settings.marginVertical = 5;
      break;
    case 'disabled':
      settings.color = 'gray';
      break;
    default:
      break;
  }

  return (
    <NativeText style={[styles.text, settings, style]} {...rest}>
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
