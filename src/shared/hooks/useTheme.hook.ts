import { colors } from '@shared/constants/colors';
import { StyleConstants, styleConstants } from '@shared/constants/styleConstants';

const useTheme = (): Theme => {
  return LIGHT_THEME;
};

export default useTheme;

export const LIGHT_THEME: Theme = {
  dark: false,
  colors: {
    primary: colors.black,
    secondary: colors.white,
    background: colors.white,
    text: colors.black,
    buttonText: colors.white,
    lightText: colors.lightGray,
    restrictionsText: colors.cyan,
    textDisabled: colors.gray,
    button: colors.black,
    buttonDisabled: colors.lightGray,
    postStatus: {
      confirmed: colors.lime,
      created: colors.green,
      canceled: colors.secondRed,
      completed: colors.lightGray,
    },
    placeholder: colors.lightGray,
    imagePlaceholder: colors.cloud,
    darkGray: colors.darkGray,
    selected: colors.cyan,
    tagIcon: colors.cyan,
    red: colors.red,
    secondRed: colors.secondRed,
    darkBlue: colors.darkBlue,
    lime: colors.lime,
    transparent: colors.transparent,
    imageGradient: colors.blackCoral,
    counterText: colors.darkGray,
    increaseBtn: colors.black,
    decreaseBtn: colors.lightGray,
    warning: colors.red,
    listItem: colors.black,
    selectedListItem: colors.gray,
    shadow: colors.black,
    tag: colors.grayThird,
    selectedTag: colors.graySecond,
    border: colors.black,
    iconColor: colors.black,
    gradientStart: colors.blackTransparetFull,
    gradientFinish: colors.blackTranparentQuarter,
    divider: colors.gray,
    textLink: colors.blue,
    drawerActive: colors.cyan,
    drawerInactive: colors.darkGray,
    transparentBack: colors.cyanTransparent,
  },
  styleConstants: styleConstants,
};

export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    lightText: string;
    restrictionsText: string;
    buttonText: string;
    textDisabled: string;
    button: string;
    buttonDisabled: string;
    placeholder: string;
    imagePlaceholder: string;
    darkGray: string;
    selected: string;
    tagIcon: string;
    red: string;
    secondRed: string;
    darkBlue: string;
    lime: string;
    transparent: string;
    imageGradient: string;
    counterText: string;
    increaseBtn: string;
    decreaseBtn: string;
    warning: string;
    listItem: string;
    selectedListItem: string;
    shadow: string;
    tag: string;
    selectedTag: string;
    border: string;
    iconColor: string;
    gradientStart: string;
    gradientFinish: string;
    divider: string;
    textLink: string;
    drawerActive: string;
    drawerInactive: string;
    postStatus: {
      confirmed: string;
      created: string;
      canceled: string;
      completed: string;
    };
    transparentBack: string;
  };
  styleConstants: StyleConstants;
};
