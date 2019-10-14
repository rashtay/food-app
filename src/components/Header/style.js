/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  header: {
    width: '100%',
    backgroundColor: '$color.color3',
    padding: '$gutter * 2',
  },

  headerTitle: {
    color: '$color.color1',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
  },
});

export default style;
