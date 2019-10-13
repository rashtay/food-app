/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  listContainer: {
    paddingHorizontal: '$gutter * 2',
    paddingVertical: '$gutter',
  },

  cardContainer: {
    height: 160,
  },

  cuisineContainer: { height: '100%', position: 'relative' },

  cuisineName: {
    fontFamily: 'SFProDisplay-Bold',
    color: '$color.color1',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.36,
  },

  cuisineMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  separator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '$color.color1',
  },

  meta: {
    fontFamily: 'SFProDisplay-Regular',
    alignItems: 'center',
    color: '$color.color1',
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
  },
});

export default style;
