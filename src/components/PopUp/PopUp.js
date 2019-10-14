/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import style from './style';

type Props = {
  isVisible: boolean,
  onClose: Function,
  children: React$Node,
  title: string,
};

const PopUp = ({ isVisible, onClose, children, title }: Props): React$Node => (
  <Modal
    animationType="slide"
    transparent
    isVisible={isVisible}
    onBackdropPress={onClose}
    backdropColor="black"
    backdropOpacity={0.5}
    style={style.container}>
    <View style={style.wrapper}>
      <TouchableOpacity onPress={onClose}>
        <View style={style.header}>
          <Icon name="arrow-down" style={style.icon} />

          <Text style={style.title}>{title}</Text>
        </View>
      </TouchableOpacity>

      {children}
    </View>
  </Modal>
);

export default PopUp;
