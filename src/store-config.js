/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * The central redux store of our app is created and exported to be used from here.
 * @flow
 */
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers/root';
import Reactotron from '../reactotron-config';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['search'],
  // whitelist: []
};

const middlewares = [thunkMiddleware];

const storeConfig = initialState => {
  let enhancer = {};
  const persistentReducer = persistReducer(persistConfig, rootReducer);

  if (__DEV__) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    enhancer = composeEnhancers(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer(),
    );
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }

  const store = createStore(persistentReducer, initialState, enhancer);

  if (
    module.hot &&
    module.hot.accept &&
    typeof module.hot.accept === 'function'
  ) {
    module.hot.accept('src/reducers', () => {
      store.replaceReducer(
        // eslint-disable-next-line global-require
        persistReducer(persistConfig, require('./reducers/root').default),
      );
    });
  }

  return {
    store,
    persistor: persistStore(store),
  };
};

export default storeConfig({});
