/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  btn: {
    margin: '$gutter * 2',
    padding: '$gutter + 4',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '$color.color3_50',
    borderRadius: '$gutter',
  },

  value: {
    color: '$color.color3',
    fontSize: 17,
    lineHeight: 22,
  },

  icon: {
    color: '$color.color3',
    fontSize: 22,
  },

  iconHide: {
    opacity: 0,
  },
});

export default style;
