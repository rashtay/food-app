/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    height: 44,
    margin: '$gutter * 2',
    backgroundColor: '$color.color3',
    borderRadius: '$gutter',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color: '$color.color1',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default style;
