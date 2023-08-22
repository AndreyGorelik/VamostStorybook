import OutlinedButton from './outlinedBtn.component';

export default {
  title: 'OutlinedButton',
  component: OutlinedButton,
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

export const Selected = {
  args: { ...Default.args, selected: true },
};

export const CustomColor = {
  args: { ...Default.args, color: '#9D5FFA' },
};

export const WithIcon = {
  args: { ...Default.args, icon: 'arrow-right-alt', title: 'More' },
};
