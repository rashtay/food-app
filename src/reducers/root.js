/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Combine all reducers
 * @flow
 */

import AsyncStorage from '@react-native-community/async-storage';
import { USER_LOGOUT } from 'action-type';
import { combineReducers } from 'redux';
import recipes from './recipes';
import restaurants from './restaurants';
import search from './search';
import tabBar from './tab-bar';
import theme from './theme';

const appReducer = combineReducers({
  recipes,
  restaurants,
  tabBar,
  search,
  theme,
});

const root = (state: Object, action: Object) => {
  if (action.type === USER_LOGOUT) {
    AsyncStorage.removeItem('persist:root');

    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default root;
