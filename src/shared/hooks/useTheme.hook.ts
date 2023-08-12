const useTheme = () => {
  return LIGHT_THEME;
};

export default useTheme;

const styleConstants = {
  br: {
    s: 5,
    m: 8,
    b: 10,
  },
  pd: {
    s: 5,
    m: 8,
    b: 10,
  },
  h50: 50,
};

export const LIGHT_THEME: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(30, 32, 34)',
    secondary: 'rgb(255, 255, 255)',
    background: 'rgb(255,255,255)',
    text: 'rgb(255,255,255)',
    textDisabled: 'rgba(0, 0, 0, 0.19)',
    button: 'rgb(30, 32, 34)',
    buttonDisabled: 'rgb(209, 209, 211)',
    placeholder: 'rgb(209, 209, 211)',
    darkGray: 'rgba(0, 0, 0, 0.4)',
    selected: 'rgb(34, 127, 158)',
    red: 'rgb(255, 38, 80)',
    darkBlue: 'rgb(0, 35, 69)',
    lime: 'rgb(126, 235, 81)',
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
    textDisabled: string;
    button: string;
    buttonDisabled: string;
    placeholder: string;
    darkGray: string;
    selected: string;
    red: string;
    darkBlue: string;
    lime: string;
  };
  styleConstants: any;
};
