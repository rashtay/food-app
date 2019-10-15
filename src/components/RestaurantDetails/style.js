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

  imgBg: {
    width: '100%',
    height: '100%',
  },

  linearGradient: {
    justifyContent: 'flex-end',
    height: '100%',
  },

  section: {
    padding: '$gutter * 2',
    marginHorizontal: '$gutter * 2',
    marginBottom: '$gutter * 2',
    backgroundColor: '$color.color1',
    borderRadius: '$gutter',
    shadowColor: '$color.color2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  description: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
  },

  detailTitle: {
    fontSize: 28,
    lineHeight: 34,
    marginBottom: '$gutter',
  },

  // Reservation Modal
  restaurantDetail: {
    padding: '$gutter * 2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '$color.color6',
  },

  detailName: {
    fontSize: 22,
    lineHeight: 34,
  },

  address: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: '$color.color4',
  },

  detailImg: {
    width: 120,
    height: 88,
    borderRadius: '$gutter',
  },

  payBtn: {
    backgroundColor: '$color.color2',
  },

  label: {
    color: '$color.color1',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },

  appleIcon: {
    fontSize: 24,
  },
});

export default style;
