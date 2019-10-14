/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  $themeColor: '$color.color3',

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
