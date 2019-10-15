/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Component to show loaders while data is loading
 * @flow
 */

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';

type Props = {
  label: string,
  min?: number,
  max?: number,
};

const DEFAULT_VAL = 1;

const Counter = ({ label, min, max }: Props) => {
  const [value, setValue] = useState(DEFAULT_VAL);

  const decrement = () => {
    if (value !== min) {
      setValue(value - DEFAULT_VAL);
    }
  };

  const increment = () => {
    if (value !== max) {
      setValue(value + DEFAULT_VAL);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.btn}>
        <Icon name="minus" style={style.icon} onPress={decrement} />

        <Text style={style.value}>
          {value} {label}
        </Text>

        <Icon name="plus" style={style.icon} onPress={increment} />
      </View>
    </View>
  );
};

Counter.defaultProps = {
  min: 1,
  max: 100,
};

export default Counter;
