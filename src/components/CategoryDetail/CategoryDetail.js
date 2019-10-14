/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Animated } from 'react-native';
import AppSafeArea from 'components/AppSafeArea/AppSafeArea';
import ImageCard from 'components/ImageCard/ImageCard';
import Search from 'components/Search/ReduxSearch';
import ExceptionBox from 'components/ExceptionBox/ExceptionBox';
import routes from 'routes/routes';
import { toTitleCase } from 'utils/string';
import style from './style';

type Props = {
  navigation: Object,
  isActive: boolean,
};

const { CUISINE_DETAILS } = routes;

const HIDE = 0;
const SHOW = 1;

const INPUT_HEIGHT = 40;

const CategoryDetail = (props: Props): React$Node => {
  const { navigation, isActive } = props;
  const { cuisines, name } = navigation.state.params.categoryDetail;
  const [searchText, onChangeText] = useState('');
  const [expandAnim] = useState(new Animated.Value(HIDE));

  // On state change, start animating. Basically, we'll expand and shrink the input on pressing search
  useEffect(() => {
    Animated.timing(expandAnim, {
      toValue: isActive ? SHOW : HIDE,
      duration: 500,
    }).start();
  }, [isActive, expandAnim]);

  const keyExtractor = (item: Object) => `${item.id}`;

  const renderCuisines = ({ item }) => (
    <ImageCard
      onPress={() =>
        navigation.navigate(CUISINE_DETAILS, {
          cuisineDetail: item,
          categoryName: name,
        })
      }
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

  // Animate the styles based on expandAnim state changes
  const searchAnimStyle = {
    height: expandAnim.interpolate({
      inputRange: [HIDE, SHOW],
      outputRange: [HIDE, INPUT_HEIGHT],
    }),
    opacity: expandAnim.interpolate({
      inputRange: [HIDE, SHOW],
      outputRange: [HIDE, SHOW],
    }),
  };

  return (
    <AppSafeArea>
      <Animated.View style={[style.wrapper, searchAnimStyle]}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          placeholder="Search..."
          style={style.input}
        />
      </Animated.View>

      {cuisines.length ? (
        <FlatList
          data={cuisines}
          renderItem={renderCuisines}
          keyExtractor={keyExtractor}
          extraData={props}
          contentContainerStyle={style.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ExceptionBox
          title="OOPS!"
          message="The cuisine list seems to be empty :("
        />
      )}
    </AppSafeArea>
  );
};

CategoryDetail.navigationOptions = ({ navigation }: Object) => {
  return {
    title: toTitleCase(navigation.state.params.categoryDetail.name),
    headerRight: <Search />,
  };
};

export default CategoryDetail;
