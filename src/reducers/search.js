/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Reducer for recipes related data
 * @flow
 */
import { SEARCH } from 'action-type';

const defaultState = {
  isActive: false,
};

export default function search(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case SEARCH:
      return { ...state, isActive: action.payload };

    default:
      return state;
  }
}
