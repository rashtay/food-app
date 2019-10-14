/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show exception messages
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

type Props = {
  title: string,
  message: string,
};

const ExceptionBox = ({ title, message }: Props): React$Node => (
  <View style={style.container}>
    <View style={style.meta}>
      <Text style={style.title}>{title}</Text>

      <Text style={style.message}>{message}</Text>
    </View>
  </View>
);

export default ExceptionBox;
