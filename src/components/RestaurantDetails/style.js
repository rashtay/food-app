/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: '$color.color6',
  },

  reviews: {
    marginTop: '$gutter/2',
    color: '$color.color3',
    fontSize: 11,
    fontFamily: 'SFPRODisplay-Regular',
    letterSpacing: 0.07,
    textAlign: 'center',
  },
});

export default style;
