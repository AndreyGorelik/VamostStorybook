import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
};

export const Default = {
  args: {
    title: 'Confirm',
  },
};

export const Disabled = {
  args: { ...Default.args, disabled: true },
};

export const CustomWidth = {
  args: { ...Default.args, width: 100 },
};

export const CustomColor = {
  args: { ...Default.args, color: 'rgb(34, 127, 158)' },
};
