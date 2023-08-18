import React from 'react';
import { Button as NativeButton } from 'react-native';

export default function Button({ title }) {
  return <NativeButton title={title} />;
}
