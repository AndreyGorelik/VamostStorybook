import { getImagePath } from '@shared/utils/getImagePath';
import { PropsWithChildren } from 'react';
import { View, ImageBackground } from 'react-native';

import { createStyles } from './backgroundWrapper.styles';
import { BackgroundWrapperProps } from './backgroundWrapper.types';

export default function BackgroundWrapper({
  children,
  source,
}: PropsWithChildren<BackgroundWrapperProps>) {
  const styles = createStyles();

  return source ? (
    <ImageBackground
      style={styles.imageWrapper}
      imageStyle={{ opacity: 0.8 }}
      source={{ uri: getImagePath(source) }}
    >
      {children}
    </ImageBackground>
  ) : (
    <View style={styles.imageWrapper}>{children}</View>
  );
}
