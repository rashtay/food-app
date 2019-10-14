/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of categories in the recipes section
 * @flow
 */

import React from 'react';
import { Text, FlatList } from 'react-native';
import ConditionalRenderer from 'components/ConditionalRenderer/ConditionalRenderer';
import Header from 'components/Header/Header';
import ImageCard from 'components/ImageCard/ImageCard';
import routes from 'routes/routes';
import style from './style';

type Props = {
  result: Categories,
  navigation: Object,
};

const { CATEGORY_DETAIL } = routes;

const RecipesScreen = (props: Props) => {
  const { result, navigation } = props;

  const keyExtractor = (item: Object) => `${item.id}`;

  const renderCategory = ({ item }) => (
    <ImageCard
      onPress={() =>
        navigation.navigate(CATEGORY_DETAIL, { categoryDetail: item })
      }
      imgURL={item.imgURL}>
      <Text style={style.categoryTagline}>{item.tagline}</Text>

      <Text style={style.categoryName}>{item.name}</Text>
    </ImageCard>
  );

  return (
    <>
      <Header />

      <FlatList
        data={result}
        renderItem={renderCategory}
        keyExtractor={keyExtractor}
        extraData={props}
        contentContainerStyle={style.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const Recipes = ConditionalRenderer(RecipesScreen);

export default Recipes;
