/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

type Props = {
  children?: React$Node,
  label?: string,
  onPress: Function,
  containerStyle?: Object,
};

const Button = ({
  label,
  children,
  containerStyle,
  onPress,
}: Props): React$Node => (
  <TouchableOpacity onPress={onPress}>
    <View style={[style.container, containerStyle]}>
      {label ? <Text style={style.label}>{label}</Text> : children}
    </View>
  </TouchableOpacity>
);

Button.defaultProps = {
  containerStyle: {},
  children: undefined,
  label: '',
};

export default Button;
