import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
};

export const Default = {
  args: {
    text: {
      id: '1',
      title: 'Test Task',
    },
  },
};

export const Disabled = {
  args: { ...Default.args },
};

export const Selected = {
  args: { ...Default.args },
};
