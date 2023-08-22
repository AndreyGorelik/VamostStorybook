export const styleConstants: StyleConstants = {
  borderRadius: {
    small: 5,
    medium: 8,
    big: 10,
  },
  padding: {
    small: 5,
    medium: 10,
    big: 15,
  },
  h50: 50,
};

export type StyleConstants = {
  borderRadius: DefaultStyleConst;
  padding: DefaultStyleConst;
  h50: number;
};

type DefaultStyleConst = {
  small: number;
  medium: number;
  big: number;
};
