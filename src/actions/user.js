/**
 * Author: Rahul Shetty
 * Date: 14/10/2019
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
