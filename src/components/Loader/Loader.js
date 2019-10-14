/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Component to show loaders while data is loading
 * @flow
 */

import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import style from './style';

type Props = {
  containerStyle?: Object,
  color?: string,
};

const Loader = ({ containerStyle, color }: Props) => (
  <View style={[style.container, containerStyle]}>
    <ActivityIndicator size="large" color={color || style.$themeColor} />
  </View>
);

Loader.defaultProps = {
  containerStyle: {},
  color: '',
};

export default Loader;
