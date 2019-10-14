/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to render a common header with search
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import Search from 'components/Search/Search';
import style from './style';

type Props = {
  title: string,
};

const Header = ({ title }: Props) => (
  <View style={style.header}>
    <Search />

    <Text style={style.headerTitle}>{title}</Text>
  </View>
);

export default Header;
