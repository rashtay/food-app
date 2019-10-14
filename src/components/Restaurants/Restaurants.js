/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ConditionalRenderer from 'components/ConditionalRenderer/ConditionalRenderer';
import Header from 'components/Header/Header';
import Rating from 'components/Rating/Rating';
import routes from 'routes/routes';
import MapImg from 'assets/images/map.jpg';
import style from './style';

type Props = {
  result: Categories,
  navigation: Object,
  height: number,
};

const { RESTAURANT_DETAILS } = routes;

const BOTTOM_LIST_SPACING = 30;

const RestaurantsScreen = (props: Props): React$Node => {
  const { result, navigation, height } = props;

  const keyExtractor = (item: Object) => `${item.id}`;

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RESTAURANT_DETAILS, {
          restaurantDetail: item,
          restaurantName: 'Restaurants',
        })
      }>
      <View style={style.restaurantItem}>
        <View style={style.restaurantContent}>
          <View style={style.nameContainer}>
            <Text style={style.name}>{item.name}</Text>

            <Text style={style.speciality}>{item.speciality}</Text>
          </View>

          <View style={style.ratingContainer}>
            <Rating rating={item.rating} />

            <Text style={style.reviews}>{item.reviews} reviews</Text>
          </View>
        </View>

        <Image source={{ uri: item.imgURL }} style={style.img} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <Header title="Restaurants" />

      <ImageBackground source={MapImg} style={style.imgBg}>
        <LinearGradient
          colors={[style.$gradient2, style.$gradient1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.4 }}
          style={style.linearGradient}>
          <FlatList
            data={result}
            renderItem={renderRestaurant}
            keyExtractor={keyExtractor}
            extraData={props}
            contentContainerStyle={[
              style.listContainer,
              { paddingBottom: height + BOTTOM_LIST_SPACING },
            ]}
            showsVerticalScrollIndicator={false}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const Restaurants = ConditionalRenderer(RestaurantsScreen);

export default Restaurants;
