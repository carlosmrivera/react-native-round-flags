// @flow

import React from 'react';
import { Image, ImageProps } from 'react-native';
import * as flags from './flags';

interface Props extends ImageProps {
  size?: number,
  code: string
};

const Flag: React.FC<Props> = ({ size = 64, code, style, ...props }) => {
  const flag = flags[`icons64`][code];
  const unknownFlag = flags[`icons64`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
