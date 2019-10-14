/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { IoniconsGlyphs } from 'react-native-vector-icons/Ionicons.js.flow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { MaterialIconsGlyphs } from 'react-native-vector-icons/MaterialIcons.js.flow';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import type { FontAwesome5Glyphs } from 'react-native-vector-icons/FontAwesome5.js.flow';
import style from './style';

const ICONS = {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
};

type InfoBoxProps = {
  children: React$Node,
};

type InfoItemProps = {
  iconName: IoniconsGlyphs | MaterialIconsGlyphs | FontAwesome5Glyphs,
  libraryName: 'MaterialIcons' | 'Ionicons' | 'FontAwesome5',
  label: string,
};

export const InfoBox = ({ children }: InfoBoxProps): React$Node => (
  <View style={style.container}>{children}</View>
);

export const InfoItem = ({
  iconName,
  libraryName,
  label,
}: InfoItemProps): React$Node => {
  const Icon = ICONS[libraryName];

  return (
    <View style={style.itemContainer}>
      {/* $FlowFixMe */}
      <Icon name={iconName} style={style.icon} />

      <Text style={style.label}>{label}</Text>
    </View>
  );
};
