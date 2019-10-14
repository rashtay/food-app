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

  listContainer: {
    paddingHorizontal: '$gutter * 2',
    justifyContent: 'flex-end',
    height: '100%',
  },

  restaurantItem: {
    padding: '$gutter * 2',
    backgroundColor: '$color.color1',
    borderRadius: '$gutter',
    marginBottom: '$gutter * 2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '$color.color2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  restaurantContent: {
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 17,
    lineHeight: 22,
  },

  speciality: {
    fontSize: 13,
    color: '$color.color4',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviews: {
    fontSize: 13,
    color: '$color.color4',
    marginLeft: '$gutter',
  },

  img: {
    width: 100,
    height: 68,
    borderRadius: 8,
  },
});

export default style;
