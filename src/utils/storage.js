/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * @flow
 */

import SyncStorage from 'sync-storage';

export const USER_DETAILS = 'USER_DETAILS';

export const setUserDetails = (userDetails: Object) =>
  SyncStorage.set(USER_DETAILS, JSON.stringify(userDetails));

export const getUserDetails = (): ?Object => {
  try {
    return JSON.parse(SyncStorage.get(USER_DETAILS));
  } catch (e) {
    return null;
  }
};

export const clearUserDetails = () => {
  SyncStorage.remove(USER_DETAILS);
};
