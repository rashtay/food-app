/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import ConditionalRenderer from 'components/ConditionalRenderer/ConditionalRenderer';
import AppSafeArea from 'components/AppSafeArea/AppSafeArea';
import style from './style';

const CategoryDetailScreen = (): React$Node => (
  <AppSafeArea>
    <View style={style.container}>
      <Text>Category Detail</Text>
    </View>
  </AppSafeArea>
);

const CategoryDetail = ConditionalRenderer(CategoryDetailScreen);

export default CategoryDetail;
