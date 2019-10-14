/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

type Props = {
  title: string,
  subtitle: string,
  disabled?: boolean,
  onPress: Function,
  defaultState?: boolean,
};

const Checkbox = ({
  title,
  subtitle,
  disabled,
  onPress,
  defaultState,
}: Props): React$Node => {
  const [checked, toggleCheckbox] = useState(defaultState);

  const onToggle = () => {
    toggleCheckbox(!checked);
    onPress(!checked);
  };

  return (
    <TouchableOpacity onPress={onToggle} disabled={disabled}>
      <View style={[style.container, disabled && style.disabled]}>
        <View style={[style.checkbox, checked && style.checked]} />

        <View style={style.labels}>
          <Text style={style.title}>{title}</Text>

          <Text style={style.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  defaultState: false,
};

export default Checkbox;
