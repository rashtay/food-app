/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import GalleryHeader from 'components/Header/GalleryHeader';
import Button from 'components/Button/Button';
import PopUp from 'components/PopUp/PopUp';
import { InfoBox, InfoItem } from 'components/InfoBox/InfoBox';
import Rating from 'components/Rating/Rating';
import style from './style';

type Props = {
  navigation: Object,
};

// const ONE = 1;

const RestaurantDetails = (props: Props): React$Node => {
  const { navigation } = props;
  const [showBookings, toggleBookings] = useState(false);
  const { restaurantDetail, restaurantName } = navigation.state.params;
  const {
    gallery,
    euros,
    name,
    rating,
    opensAt,
    closesAt,
    reviews,
  } = restaurantDetail;

  const toggleBookingModal = () => {
    toggleBookings(!showBookings);
  };

  return (
    <View style={style.container}>
      <StatusBar translucent barStyle="light-content" />

      {/* Header */}
      <GalleryHeader
        backTitle={restaurantName}
        title={name}
        gallery={gallery}
        navigation={navigation}
      />

      <ScrollView>
        {/* Cuisine Meta Data */}
        <InfoBox>
          <InfoItem
            iconName="money-bill-alt"
            libraryName="FontAwesome5"
            label={`€ ${euros}`}
          />

          <View>
            <Rating rating={rating} />

            <Text style={style.reviews}>{reviews} reviews</Text>
          </View>

          <InfoItem
            iconName="ios-clock"
            libraryName="Ionicons"
            label={`${opensAt} - ${closesAt}`}
          />
        </InfoBox>

        {/* See Ingredients Button */}
        <Button label="See Ingredients" onPress={toggleBookingModal} />

        {/* Modal */}
        <PopUp
          isVisible={showBookings}
          title="Ingredients"
          onClose={toggleBookingModal}>
          <View>
            <Text>Hey</Text>
          </View>
        </PopUp>
      </ScrollView>
    </View>
  );
};

RestaurantDetails.navigationOptions = {
  header: null,
};

export default RestaurantDetails;
