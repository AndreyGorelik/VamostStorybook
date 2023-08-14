import PhoneInput from './phoneInput.component';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
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
