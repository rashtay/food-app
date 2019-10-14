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
    alignItems: 'center',
  },

  icon: {
    color: '$color.color1',
    fontSize: 26,
  },

  prevName: {
    color: '$color.color1',
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
    letterSpacing: -0.41,
    marginBottom: 2,
    marginLeft: '$gutter',
  },
});

export default style;
