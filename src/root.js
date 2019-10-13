/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * @flow
 */

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import storeOptions from 'store-config';
import AppNavigation from 'routes/root';
import Loader from 'components/Loader/Loader';
import { theme, deviceHeight, deviceWidth } from 'styles/root';

const { store, persistor } = storeOptions;

Ionicons.loadFont();

// calculate styles
EStyleSheet.build({
  $deviceWidth: deviceWidth,
  $deviceHeight: deviceHeight,
  $color: theme,
  $gutter: 8,
});

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <AppNavigation />
    </PersistGate>
  </Provider>
);

export default Root;
