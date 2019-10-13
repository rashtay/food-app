/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Reducer for recipes related data
 * @flow
 */
import { RECIPE_TYPES } from 'action-type';

const defaultState: DefaultState = {
  pending: false,
  result: [],
  err: '',
};

export default function recipes(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case RECIPE_TYPES.GET_RECIPE_CATEGORIES_REQUEST:
      return { ...state, pending: true, err: '' };

    case RECIPE_TYPES.GET_RECIPE_CATEGORIES_SUCCESS:
      return { ...state, pending: false, result: action.response, err: '' };

    case RECIPE_TYPES.GET_RECIPE_CATEGORIES_ERROR:
      return { ...state, pending: false, err: action.err };

    default:
      return state;
  }
}
