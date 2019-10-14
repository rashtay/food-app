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

const Header = () => (
  <View style={style.header}>
    <Search />

    <Text style={style.headerTitle}>Recipes</Text>
  </View>
);

export default Header;
