import Input from './input.component';

export default {
  title: 'Input',
  component: Input,
};

export const Default = {
  args: {
    placeholder: 'Enter your email address',
  },
};

export const Filled = {
  args: {
    placeholder: 'Enter your email address',
    value: 'email.example@gmail.com',
  },
};
