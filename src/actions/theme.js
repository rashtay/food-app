/**
 * Author: Rahul Shetty
 * Date: 14/10/2019
 *
 * Actions for user related operations
 * @flow
 */

import { SET_THEME } from 'action-type';

export const toggleTheme = (theme: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_THEME,
    payload: theme,
  });
};
