/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Component to show loaders while data is loading
 * @flow
 */

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import style from './style';

type Props = {
  list: Array<string>,
};

const INDEX = 0;

const Dropdown = ({ list }: Props) => {
  const updatedList = [...list, 'Cancel'];
  const [dropdownValue, togglePicker] = useState(INDEX);
  const actionRef: Object = useRef(null);

  const showActionSheet = () => {
    actionRef.current.show();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={showActionSheet}>
        <View style={style.btn}>
          <Icon name="arrow-down" style={style.iconHide} />

          <Text style={style.value}>{updatedList[dropdownValue]}</Text>

          <Icon name="arrow-down" style={style.icon} />
        </View>
      </TouchableOpacity>

      <ActionSheet
        ref={actionRef}
        title="When do you wanna reserve a seat ?"
        options={updatedList}
        cancelButtonIndex={updatedList.length - 1}
        onPress={index =>
          index !== updatedList.length - 1 && togglePicker(index)
        }
      />
    </View>
  );
};

export default Dropdown;
