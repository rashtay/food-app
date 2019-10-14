/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Action for appointment related operations
 * @flow
 */
import api from 'utils/api';

export const getRestaurants = () => (dispatch: Dispatch) => {
  api.get(
    `restaurants`,
    {
      eventBase: 'LIST_RESTAURANTS',
    },
    dispatch,
  );
};
