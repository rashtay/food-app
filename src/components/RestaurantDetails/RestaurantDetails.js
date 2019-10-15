/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import GalleryHeader from 'components/Header/GalleryHeader';
import Button from 'components/Button/Button';
import PopUp from 'components/PopUp/PopUp';
import { InfoBox, InfoItem } from 'components/InfoBox/InfoBox';
import Rating from 'components/Rating/Rating';
import Dropdown from 'components/Dropdown/Dropdown';
import Counter from 'components/Counter/Counter';
import Pills from 'components/Pills/Pills';
import MapImg from 'assets/images/map.jpg';
import style from './style';

type Props = {
  navigation: Object,
  height: number,
};

// const ONE = 1;

const RestaurantDetails = (props: Props): React$Node => {
  const { navigation, height } = props;
  const [showBookings, toggleBookings] = useState(false);
  const { restaurantDetail, restaurantName } = navigation.state.params;
  const {
    imgURL,
    gallery,
    euros,
    name,
    rating,
    opensAt,
    closesAt,
    reviews,
    description,
    moreDetails,
    address1,
    address2,
    availableSlots,
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

      <ScrollView contentContainerStyle={style.container}>
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

        <ImageBackground source={MapImg} style={style.imgBg}>
          <LinearGradient
            colors={[style.$gradient2, style.$gradient1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={[style.linearGradient, { paddingBottom: height }]}>
            {/* See Ingredients Button */}
            <Button label="Make Reservation" onPress={toggleBookingModal} />

            {/* Description */}
            <View style={style.section}>
              <Text style={style.description}>{description}</Text>
            </View>

            {/* More Details */}
            <View style={style.section}>
              <Text style={style.detailTitle}>{moreDetails.title}</Text>

              <Text style={style.description}>
                {moreDetails.shortDescription}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* Modal */}
        <PopUp
          isVisible={showBookings}
          title="Reservation"
          height="55%"
          onClose={toggleBookingModal}>
          <View style={style.restaurantDetail}>
            <View>
              <Text style={style.detailName}>{name}</Text>

              <Text style={style.address}>{address1}</Text>
              <Text style={style.address}>{address2}</Text>
            </View>

            <Image source={{ uri: imgURL }} style={style.detailImg} />
          </View>

          <Dropdown list={['Today', 'Tomorrow']} />

          <Counter label="people" />

          <Pills list={availableSlots} />

          <Button containerStyle={style.payBtn} onPress={toggleBookingModal}>
            <Text style={style.label}>
              <Icon name="logo-apple" style={style.appleIcon} />
              &nbsp;
              <Text>Pay</Text>
            </Text>
          </Button>
        </PopUp>
      </ScrollView>
    </View>
  );
};

RestaurantDetails.navigationOptions = {
  header: null,
};

export default RestaurantDetails;
