/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show ratings
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

type Props = {
  rating: number,
};

const TOTAL_STAR = 5;

const Rating = ({ rating }: Props): React$Node => (
  <View style={style.container}>
    {[...Array(TOTAL_STAR)].map((val, index) => (
      <Icon
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        name="ios-star"
        style={[style.star, index < rating && style.activeStar]}
      />
    ))}
  </View>
);

export default Rating;
