/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Header } from 'react-navigation-stack';
import Carousel from 'components/Carousel/Carousel';
import Bookmark from 'components/Bookmark/Bookmark';
import BackButton from 'components/BackButton/BackButton';
import { InfoBox, InfoItem } from 'components/InfoBox/InfoBox';
import { toTitleCase } from 'utils/string';
import style from './style';

type Props = {
  navigation: Object,
};

const CuisineDetails = (props: Props): React$Node => {
  const { navigation } = props;
  const { cuisineDetail, categoryName } = navigation.state.params;
  const { gallery, name, people, mins } = cuisineDetail;
  const headerHeight = Header.HEIGHT;

  return (
    <View style={style.container}>
      <StatusBar translucent barStyle="light-content" />

      {/* Header */}
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

      <ScrollView>
        {/* Cuisine Meta Data */}
        <InfoBox>
          <InfoItem
            iconName="restaurant"
            libraryName="MaterialIcons"
            label={`${people} people`}
          />
          <InfoItem
            iconName="ios-clock"
            libraryName="Ionicons"
            label={`${mins} minutes`}
          />
        </InfoBox>
      </ScrollView>
    </View>
  );
};

CuisineDetails.navigationOptions = {
  header: null,
};

export default CuisineDetails;
