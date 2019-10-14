/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    padding: '$gutter',
    backgroundColor: '$color.color1',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '$color.color3',
    fontSize: 26,
  },

  label: {
    marginTop: '$gutter/2',
    color: '$color.color3',
    fontSize: 11,
    fontFamily: 'SFPRODisplay-Regular',
    letterSpacing: 0.07,
  },
});

export default style;
