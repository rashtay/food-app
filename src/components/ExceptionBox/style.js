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
    justifyContent: 'center',
    alignItems: 'center',
    margin: '$gutter * 2',
  },

  meta: {
    width: '100%',
  },

  title: {
    paddingVertical: '$gutter',
    paddingHorizontal: '$gutter * 2',
    fontSize: 18,
    fontFamily: 'SFProDisplay-Bold',
    backgroundColor: '$color.color5',
    color: '$color.color1',
  },

  message: {
    paddingVertical: '$gutter',
    paddingHorizontal: '$gutter * 2',
    borderWidth: 1,
    borderColor: '$color.color4',
  },
});

export default style;
