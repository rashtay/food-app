/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Configure app routes
 * @flow
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, StatusBar, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Recipes,
  CategoryDetail,
  CuisineDetails,
  Restaurants,
  RestaurantDetails,
} from 'containers/root';
import { setTheme, deviceHeight, deviceWidth } from 'styles/root';
import FeedIcon from 'assets/icons/feed/icons-feed.png';
import RestaurantIcon from 'assets/icons/restaurant/icons-restaurant.png';
import TabBar from './TabBar';
import routes from './routes';

// Style the tab icons
const styles = StyleSheet.create({
  iconStyle: { width: 28, height: 28 },
});

// Route names for the screens
const {
  RECIPES,
  RESTAURANTS,
  CATEGORY_DETAIL,
  CUISINE_DETAILS,
  RESTAURANT_DETAILS,
} = routes;

// Images paths for the tab icons
const IMAGE_PATH: Object = {
  [RECIPES]: FeedIcon,
  [RESTAURANTS]: RestaurantIcon,
};

// Tab container
const Root: Object = ({ activeTheme }: Object) => {
  // calculate styles
  EStyleSheet.build({
    $deviceWidth: deviceWidth,
    $deviceHeight: deviceHeight,
    $color: setTheme(activeTheme),
    $gutter: 8,
  });

  // Common navigation options for stack navigator
  const COMMON_NAV_OPTIONS: Object = {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      drawerLockMode: 'locked-closed',
      headerStyle: {
        backgroundColor: setTheme(activeTheme).color3,
      },
      headerTintColor: setTheme(activeTheme).color1,
    },
  };

  // Options to configure the tabs
  const TAB_BAR_OPTIONS: Object = {
    activeTintColor: setTheme(activeTheme).color3,
    inactiveTintColor: setTheme(activeTheme).color4,
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
    [CUISINE_DETAILS]: CuisineDetails,
  });

  // Screens for Restaurants
  const RestaurantStack: Object = StackNav({
    [RESTAURANTS]: Restaurants,
    [RESTAURANT_DETAILS]: RestaurantDetails,
  });

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(setTheme(activeTheme).color3);
    }
  }, [activeTheme]);

  const AppNav = createAppContainer(
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
        tabBarComponent: TabBar,
        tabBarOptions: { ...TAB_BAR_OPTIONS },
      },
    ),
  );

  return <AppNav />;
};

const mapStateToProps = (state: Object) => {
  const { activeTheme } = state.theme;

  return { activeTheme };
};

export default connect(
  mapStateToProps,
  {},
)(Root);
