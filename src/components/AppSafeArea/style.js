/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  $statusBarColor: '$color.color3',

  topSafeArea: {
    backgroundColor: '$color.color3',
  },

  container: {
    flex: 1,
  },
});

export default style;
