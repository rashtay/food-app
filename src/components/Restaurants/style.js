/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  $gradient1: '$color.color6',
  $gradient2: '$color.color6_0',

  container: {
    flex: 1,
  },

  imgBg: {
    width: '100%',
    height: '100%',
  },

  linearGradient: {
    height: '100%',
  },

  listContainer: {
    paddingHorizontal: '$gutter * 2',
    justifyContent: 'flex-end',
    height: '100%',
  },
});

export default style;
