import Input from './input.component';

export default {
  title: 'Input',
  component: Input,
};

export const Default = {
  args: {
    title: 'Confirm',
  },
};

export const Disabled = {
  args: { ...Default.args, disabled: true },
};

export const CustomColor = {
  args: { ...Default.args, color: 'rgb(34, 127, 158)' },
};
