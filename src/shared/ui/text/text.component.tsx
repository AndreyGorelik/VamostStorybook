import { Text as NativeText, StyleSheet, TextStyle, TextProps } from 'react-native';
type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'warning' | 'medium' | 'disabled';

interface CustomText extends TextProps {
  children: string | string[];
  color?: string;
  variant?: TextVariant;
  noMargin?: boolean;
}

function Text({ children, variant, color, noMargin, ...rest }: CustomText) {
  const settings: TextStyle = {
    fontSize: 17,
    padding: 0,
    color,
    marginVertical: noMargin ? 0 : 5,
  };

  switch (variant) {
    case 'h1':
      settings.fontSize = 40;
      settings.marginVertical = 15;
      settings.fontWeight = '700';
      break;
    case 'h2':
      settings.fontSize = 30;
      settings.marginVertical = 13;
      settings.fontWeight = '700';
      break;
    case 'h3':
      settings.fontSize = 25;
      settings.marginVertical = 11;
      settings.fontWeight = '600';
      break;
    case 'h4':
      settings.fontSize = 21;
      settings.marginVertical = noMargin ? 0 : 10;
      settings.fontWeight = '600';
      break;
    case 'h5':
      settings.fontSize = 18;
      settings.marginVertical = noMargin ? 0 : 5;
      settings.fontWeight = '600';
      break;
    case 'h6':
      settings.fontSize = 15;
      settings.marginVertical = noMargin ? 0 : 8;
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
