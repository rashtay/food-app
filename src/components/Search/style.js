/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    position: 'relative',
    height: 30,
  },

  wrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  input: {
    height: 30,
    borderRadius: 15,
    paddingHorizontal: '$gutter * 2',
    paddingVertical: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: '$color.color1',
  },

  icon: {
    position: 'absolute',
    right: 12,
    fontSize: 24,
    top: 2,
    zIndex: 10,
  },

  searchIcon: {
    color: '$color.color1',
  },

  reduxSearchIcon: {
    color: '$color.color1',
    fontSize: 24,
    paddingHorizontal: '$gutter * 2',
  },

  closeIcon: {
    color: '$color.color2',
  },
});

export default style;
