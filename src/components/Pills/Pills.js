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
  list: Array<string>,
};

const Pills = ({ list }: Props): React$Node => {
  const [selected, onSelect] = useState([]);

  const onPressPill = value => {
    const index = selected.indexOf(value);
    const updatedSelection = [...selected];

    if (index > -1) {
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(value);
    }

    onSelect([...updatedSelection]);
  };

  return (
    <View style={style.container}>
      {list.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => onPressPill(value)}
          style={style.pillBtn}>
          <View
            style={[
              style.pill,
              selected.indexOf(value) > -1 && style.activePill,
            ]}>
            <Text
              style={[
                style.label,
                selected.indexOf(value) > -1 && style.activeLabel,
              ]}>
              {value}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pills;
