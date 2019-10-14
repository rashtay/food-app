/**
 * Author: Rahul Shetty
 * Date: 14/10/2019
 *
 * Actions for user related operations
 * @flow
 */

import { TAB_BAR } from 'action-type';
import { getInset } from 'react-native-safe-area-view';

export const setTabBarHeight = (height: number) => (dispatch: Dispatch) => {
  const bottomOffset = getInset('bottom', false);

  dispatch({
    type: TAB_BAR,
    payload: height + bottomOffset,
  });
};
