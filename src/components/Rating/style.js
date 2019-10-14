/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    flexDirection: 'row',
  },

  star: {
    color: '$color.color3_50',
    fontSize: 22,
    marginLeft: 1,
  },

  activeStar: {
    color: '$color.color3',
  },
});

export default style;
