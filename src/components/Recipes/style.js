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
  },

  listContainer: {
    paddingHorizontal: '$gutter * 2',
    paddingVertical: '$gutter',
  },

  categoryTagline: {
    color: '$color.color1_70',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 15,
    lineHeight: 14,
    textTransform: 'uppercase',
    letterSpacing: -0.24,
  },

  categoryName: {
    color: '$color.color1',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    textTransform: 'capitalize',
    letterSpacing: 0.36,
    marginTop: '$gutter',
  },
});

export default style;
