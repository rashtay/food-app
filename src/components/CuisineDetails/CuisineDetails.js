/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show cuisine details
 * @flow
 */

import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import GalleryHeader from 'components/Header/GalleryHeader';
import Button from 'components/Button/Button';
import PopUp from 'components/PopUp/PopUp';
import Checkbox from 'components/Checkbox/Checkbox';
import { InfoBox, InfoItem } from 'components/InfoBox/InfoBox';
import style from './style';

type Props = {
  navigation: Object,
};

const ONE = 1;
const ZERO = 0;

// Reminder variables
let addedReminders = {};
let tempAddedReminders = {};

const CuisineDetails = (props: Props): React$Node => {
  const { navigation } = props;
  const [showIngredients, toggleIngredients] = useState(false);
  const { cuisineDetail, categoryName } = navigation.state.params;
  const {
    gallery,
    name,
    people,
    mins,
    instructions,
    ingredients,
  } = cuisineDetail;

  const keyExtractor = (item: Object) => `${item.id}`;

  const toggleIngredientModal = () => {
    toggleIngredients(!showIngredients);
  };

  // On checkbox press, save and delete checkbox values
  const onPressCheckbox = (item: Object, isChecked: boolean) => {
    if (isChecked) {
      tempAddedReminders[item.id] = { ...item };
    } else {
      delete tempAddedReminders[item.id];
    }
  };

  // Add reminders for the ingredients
  const addReminders = () => {
    addedReminders = { ...tempAddedReminders, ...addedReminders };
    tempAddedReminders = {};

    toggleIngredientModal();
  };

  const renderInstructions = (steps: Array<string>) =>
    steps.map((step: string, index: number) => (
      <View key={step} style={[style.step, index === ZERO && style.noBorder]}>
        <Text style={style.stepNumber}>{index + ONE}</Text>

        <Text style={style.stepDetails}>{step}</Text>
      </View>
    ));

  const renderIngredients = ({ item }: Object) => (
    <Checkbox
      key={item.id}
      title={item.name}
      subtitle={item.quantity}
      onPress={isChecked => onPressCheckbox(item, isChecked)}
      disabled={!!addedReminders[item.id]}
      defaultState={addedReminders[item.id] || tempAddedReminders[item.id]}
    />
  );

  return (
    <View style={style.container}>
      <StatusBar translucent barStyle="light-content" />

      {/* Header */}
      <GalleryHeader
        backTitle={categoryName}
        title={name}
        gallery={gallery}
        navigation={navigation}
      />

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
          <FlatList
            data={ingredients}
            renderItem={renderIngredients}
            extraData={props}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />

          <Button label="Add to Reminders" onPress={addReminders} />
        </PopUp>
      </ScrollView>
    </View>
  );
};

CuisineDetails.navigationOptions = {
  header: null,
};

export default CuisineDetails;
