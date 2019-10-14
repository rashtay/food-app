/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header } from 'react-navigation-stack';
import Carousel from 'components/Carousel/Carousel';
import Bookmark from 'components/Bookmark/Bookmark';
import BackButton from 'components/BackButton/BackButton';
import { toTitleCase } from 'utils/string';
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
          <BackButton
            prevName={toTitleCase(categoryName)}
            navigation={navigation}
          />

          <Bookmark />
        </View>

        <Text style={style.cuisineName}>{name}</Text>
      </View>
    </View>
  );
};

CuisineDetails.navigationOptions = {
  header: null,
};

export default CuisineDetails;
