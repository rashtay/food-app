/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  wrapper: {
    paddingHorizontal: '$gutter * 2',
  },

  input: {
    padding: '$gutter',
    borderBottomWidth: 1,
    borderColor: '$color.color4',
  },

  listContainer: {
    paddingHorizontal: '$gutter * 2',
    paddingVertical: '$gutter',
  },

  cardContainer: {
    height: 160,
  },

  cuisineContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },

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
