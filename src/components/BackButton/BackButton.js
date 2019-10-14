/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to go back to previous screen
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

type Props = {
  navigation: Object,
  prevName: string,
};

const BackButton = ({ navigation, prevName }: Props) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={style.container}>
        <Icon name="ios-arrow-back" style={style.icon} />

        <Text style={style.prevName}>{prevName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
