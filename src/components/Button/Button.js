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
};

const Button = ({ label, children, onPress }: Props): React$Node => (
  <TouchableOpacity onPress={onPress}>
    <View style={style.container}>
      {label ? <Text style={style.label}>{label}</Text> : children}
    </View>
  </TouchableOpacity>
);

Button.defaultProps = {
  children: undefined,
  label: '',
};

export default Button;
