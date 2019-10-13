/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AppSafeArea from 'components/AppSafeArea/AppSafeArea';
import ImageCard from 'components/ImageCard/ImageCard';
import { toTitleCase } from 'utils/string';
import style from './style';

type Props = {
  navigation: Object,
};

const CategoryDetail = (props: Props): React$Node => {
  const { navigation } = props;
  const { cuisines } = navigation.state.params.categoryDetail;

  const keyExtractor = (item: Object) => `${item.id}`;

  const renderCuisines = ({ item }) => (
    <ImageCard
      onPress={() => navigation.navigate()}
      imgURL={item.imgURL}
      containerStyle={style.cardContainer}>
      <View style={style.cuisineContainer}>
        <Text style={style.cuisineName}>{item.name}</Text>

        <View style={style.cuisineMeta}>
          <Text style={style.meta}>{item.people} people&nbsp;&nbsp;</Text>

          <View style={style.separator} />

          <Text style={style.meta}>&nbsp;&nbsp;{item.mins} minutes</Text>
        </View>
      </View>
    </ImageCard>
  );

  return (
    <AppSafeArea>
      <FlatList
        data={cuisines}
        renderItem={renderCuisines}
        keyExtractor={keyExtractor}
        extraData={props}
        contentContainerStyle={style.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeArea>
  );
};

CategoryDetail.navigationOptions = ({ navigation }: Object) => {
  return {
    title: toTitleCase(navigation.state.params.categoryDetail.name),
  };
};

export default CategoryDetail;
