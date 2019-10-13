/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Configure app routes
 * @flow
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Recipes, Restaurants, CategoryDetail } from 'containers/root';
import { theme } from 'styles/root';
import FeedIcon from 'assets/icons/feed/icons-feed.png';
import RestaurantIcon from 'assets/icons/restaurant/icons-restaurant.png';
import routes from './routes';

// Style the tab icons
const styles = StyleSheet.create({
  iconStyle: { width: 28, height: 28 },
});

// Route names for the screens
const { RECIPES, RESTAURANTS, CATEGORY_DETAIL } = routes;

// Images paths for the tab icons
const IMAGE_PATH: Object = {
  [RECIPES]: FeedIcon,
  [RESTAURANTS]: RestaurantIcon,
};

// Common navigation options for stack navigator
const COMMON_NAV_OPTIONS: Object = {
  defaultNavigationOptions: {
    gesturesEnabled: false,
    drawerLockMode: 'locked-closed',
  },
  headerMode: 'none',
};

// Options to configure the tabs
const TAB_BAR_OPTIONS: Object = {
  activeTintColor: theme.color3,
  inactiveTintColor: theme.color4,
  showIcon: true,
  showLabel: false,
};

// A function that returns a stack of navigation screens on providing the Object of screen and it's path name
const StackNav = (screens: Screens): Object =>
  createStackNavigator(screens, COMMON_NAV_OPTIONS);

// Screens for Recipes
const RecipeStack: Object = StackNav({
  [RECIPES]: Recipes,
  [CATEGORY_DETAIL]: CategoryDetail,
});

// Screens for Restaurants
const RestaurantStack: Object = StackNav({ [RESTAURANTS]: Restaurants });

// Tab container
const Root: Object = createAppContainer(
  createBottomTabNavigator(
    {
      [RECIPES]: RecipeStack,
      [RESTAURANTS]: RestaurantStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;

          // You can return any component that you like here to render the tabs!
          return (
            <Image
              style={[styles.iconStyle, { tintColor }]}
              source={IMAGE_PATH[routeName]}
            />
          );
        },
      }),
      tabBarOptions: { ...TAB_BAR_OPTIONS },
    },
  ),
);

export default Root;
