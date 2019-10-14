/**
 * Author: Rahul Shetty
 * Date: 14/10/2019
 *
 * Actions for user related operations
 * @flow
 */

import { SEARCH } from 'action-type';

export const onToggleSearch = () => (dispatch: Dispatch, getState: Object) => {
  const { isActive } = getState().search;

  dispatch({
    type: SEARCH,
    payload: !isActive,
  });
};
