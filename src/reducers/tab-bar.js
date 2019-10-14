/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Reducer for recipes related data
 * @flow
 */
import { TAB_BAR } from 'action-type';

const defaultState = {
  height: 0,
};

export default function tabBar(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case TAB_BAR:
      return { ...state, height: action.payload };

    default:
      return state;
  }
}
