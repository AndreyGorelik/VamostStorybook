import PhoneInput from './phoneInput.component';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
};

export const Default = {
  args: {
    placeholder: 'Enter your phone number',
  },
};

export const Filled = {
  args: {
    placeholder: 'Enter your phone number',
    value: '+375336750081',
  },
};
