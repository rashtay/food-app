/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  $dotSize: 7,

  container: {
    position: 'relative',
  },

  imgContainer: {
    width: '$deviceWidth',
    height: 250,
    position: 'relative',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  imgOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '$color.color2_30',
    position: 'absolute',
  },

  dotContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '$gutter',
    right: '$gutter * 2',
  },

  dot: {
    width: '$dotSize',
    height: '$dotSize',
    borderRadius: '$dotSize / 2',
    backgroundColor: '$color.color1_50',
    marginLeft: '$gutter',
  },

  activeDot: {
    backgroundColor: '$color.color1',
  },
});

export default style;
