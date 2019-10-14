/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Header } from 'react-navigation-stack';
import Carousel from 'components/Carousel/Carousel';
import Bookmark from 'components/Bookmark/Bookmark';
import BackButton from 'components/BackButton/BackButton';
import Button from 'components/Button/Button';
import PopUp from 'components/PopUp/PopUp';
import { InfoBox, InfoItem } from 'components/InfoBox/InfoBox';
import { toTitleCase } from 'utils/string';
import style from './style';

type Props = {
  navigation: Object,
};

const ONE = 1;
const ZERO = 0;

const CuisineDetails = (props: Props): React$Node => {
  const { navigation } = props;
  const [showIngredients, toggleIngredients] = useState(false);
  const { cuisineDetail, categoryName } = navigation.state.params;
  const { gallery, name, people, mins, instructions } = cuisineDetail;
  const headerHeight = Header.HEIGHT;

  const toggleIngredientModal = () => {
    toggleIngredients(!showIngredients);
  };

  const renderInstructions = (steps: Array<string>) =>
    steps.map((step: string, index: number) => (
      <View key={step} style={[style.step, index === ZERO && style.noBorder]}>
        <Text style={style.stepNumber}>{index + ONE}</Text>

        <Text style={style.stepDetails}>{step}</Text>
      </View>
    ));

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

        {/* See Ingredients Button */}
        <Button label="See Ingredients" onPress={toggleIngredientModal} />

        {/* Recipe */}
        <View style={style.instructions}>
          {renderInstructions(instructions)}
        </View>

        {/* Modal */}
        <PopUp
          isVisible={showIngredients}
          title="Ingredients"
          onClose={toggleIngredientModal}>
          <View class={style.ingredients}>
            <Text>List ingredients</Text>
          </View>
        </PopUp>
      </ScrollView>
    </View>
  );
};

CuisineDetails.navigationOptions = {
  header: null,
};

export default CuisineDetails;
