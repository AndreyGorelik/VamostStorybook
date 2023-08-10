import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Default = {
  args: {
    text: {
      id: '1',
      title: 'Test Task',
    },
  },
};

export const H1 = {
  args: { text: { ...Default.args.text, variant: 'h1' } },
};

export const H2 = {
  args: { text: { ...Default.args.text, variant: 'h2' } },
};

export const H3 = {
  args: { text: { ...Default.args.text, variant: 'h3' } },
};

export const H4 = {
  args: { text: { ...Default.args.text, variant: 'h4' } },
};

export const H5 = {
  args: { text: { ...Default.args.text, variant: 'h5' } },
};

export const H6 = {
  args: { text: { ...Default.args.text, variant: 'h6' } },
};

export const Warning = {
  args: { text: { ...Default.args.text, variant: 'warning' } },
};

export const Medium = {
  args: { text: { ...Default.args.text, variant: 'medium' } },
};

export const Disabled = {
  args: { text: { ...Default.args.text, variant: 'disabled' } },
};
