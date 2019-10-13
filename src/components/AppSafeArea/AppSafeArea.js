/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Safe area defined for our app screens to tackle issues like rounded corners and notches
 * @flow
 */

import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import style from './style';

type Props = {
  children: React$Node,
};

const AppSafeArea: Props => React$Node = ({ children }) => (
  <>
    <StatusBar
      backgroundColor={style.$statusBarColor}
      barStyle="dark-content"
    />
    <SafeAreaView style={style.topSafeArea} />
    <SafeAreaView style={style.container}>{children}</SafeAreaView>
  </>
);

export default AppSafeArea;
