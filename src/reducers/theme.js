/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Reducer for recipes related data
 * @flow
 */
import { SET_THEME } from 'action-type';

const defaultState = {
  activeTheme: 'dark',
};

export default function theme(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, activeTheme: action.payload };

    default:
      return state;
  }
}
