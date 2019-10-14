/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Reducer for recipes related data
 * @flow
 */
import { RESTAURANTS_TYPES } from 'action-type';

const defaultState: DefaultState = {
  pending: true,
  result: [],
  err: '',
};

export default function restaurants(
  state: Object = defaultState,
  action: Object,
) {
  switch (action.type) {
    case RESTAURANTS_TYPES.GET_LIST_RESTAURANTS_REQUEST:
      return { ...state, pending: true, err: '' };

    case RESTAURANTS_TYPES.GET_LIST_RESTAURANTS_SUCCESS:
      return { ...state, pending: false, result: action.response, err: '' };

    case RESTAURANTS_TYPES.GET_LIST_RESTAURANTS_ERROR:
      return { ...state, pending: false, err: action.err };

    default:
      return state;
  }
}
