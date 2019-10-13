import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

/**
 * You can use the following commands
 *
 * console.tron.log('Sweet Freedom!')
 * console.tron.logImportant('I am important')
 * console.tron.display({
 *   name: 'Tacos',
 *   value: {a: 1, b: [1,2,3]},
 *   preview: 'when you click here, it might surprise you!',
 *   important: true,
 *   image: 'http://placekitten.com/g/400/400'
 * })
 */
/* eslint-disable no-console */
console.tron = Reactotron;

Reactotron.clear();

const reactotronConfig = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Food App',
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotronConfig;
