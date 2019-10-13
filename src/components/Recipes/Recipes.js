/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of categories in the recipes section
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ConditionalRenderer from 'components/ConditionalRenderer/ConditionalRenderer';
import AppSafeArea from 'components/AppSafeArea/AppSafeArea';
import Search from 'components/Search/Search';
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
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(CATEGORY_DETAIL, { categoryDetail: { ...item } })
      }>
      <View key={item.id} style={style.categoryItem}>
        <ImageBackground
          source={{ uri: item.imgURL }}
          style={style.imgBackground}>
          <View style={style.categoryContainer}>
            <Text style={style.categoryTagline}>{item.tagline}</Text>

            <Text style={style.categoryName}>{item.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <AppSafeArea>
      <View style={style.header}>
        <Search />

        <Text style={style.headerTitle}>Recipes</Text>
      </View>

      <FlatList
        data={result}
        renderItem={renderCategory}
        keyExtractor={keyExtractor}
        extraData={props}
        contentContainerStyle={style.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeArea>
  );
};

const Recipes = ConditionalRenderer(RecipesScreen);

export default Recipes;
