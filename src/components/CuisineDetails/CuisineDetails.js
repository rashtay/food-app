/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'components/Carousel/Carousel';
import { Header } from 'react-navigation-stack';
import style from './style';

type Props = {
  navigation: Object,
};

const CuisineDetails = (props: Props): React$Node => {
  const { navigation } = props;
  const { cuisineDetail, categoryName } = navigation.state.params;
  const { gallery, name } = cuisineDetail;
  const headerHeight = Header.HEIGHT;

  return (
    <View style={style.container}>
      <StatusBar translucent barStyle="light-content" />

      <View style={style.header}>
        <Carousel gallery={gallery} />

        <View style={[style.headerTop, { top: headerHeight }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={style.backContainer}>
              <Icon name="ios-arrow-back" />

              <Text>{categoryName}</Text>
            </View>
          </TouchableOpacity>

          <Icon name="md-bookmark" />
        </View>

        <Text>{name}</Text>
      </View>
    </View>
  );
};

CuisineDetails.navigationOptions = {
  header: null,
};

export default CuisineDetails;
