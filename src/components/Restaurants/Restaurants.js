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
import ConditionalRenderer from 'components/ConditionalRenderer/ConditionalRenderer';
import Header from 'components/Header/Header';
import routes from 'routes/routes';
import MapImg from 'assets/images/map.jpg';
import style from './style';

type Props = {
  result: Categories,
  navigation: Object,
};

const { RESTAURANT_DETAIL } = routes;

const RestaurantsScreen = (props: Props): React$Node => {
  const { result, navigation } = props;

  const keyExtractor = (item: Object) => `${item.id}`;

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RESTAURANT_DETAIL, { categoryDetail: item })
      }>
      <View>
        <View>
          <Text style={style.categoryTagline}>{item.tagline}</Text>

          <Text style={style.categoryName}>{item.name}</Text>
        </View>

        <View>
          <Image />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Header title="Restaurants" />

      <ImageBackground source={MapImg} style={style.imgBg}>
        <FlatList
          data={result}
          renderItem={renderRestaurant}
          keyExtractor={keyExtractor}
          extraData={props}
          contentContainerStyle={style.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </>
  );
};

const Restaurants = ConditionalRenderer(RestaurantsScreen);

export default Restaurants;
