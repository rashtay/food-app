/**
 * Author: Rahul Shetty
 * Date: 20/05/2019
 *
 * Actions for user related operations
 * @flow
 */

import { USER_LOGOUT } from 'action-type';
import { clearUserDetails } from 'utils/storage';

export const logout = () => (dispatch: Function) => {
  clearUserDetails();

  dispatch({
    type: USER_LOGOUT,
  });
};
