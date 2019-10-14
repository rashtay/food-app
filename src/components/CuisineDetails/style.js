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
    backgroundColor: '$color.color6',
  },

  header: {
    width: '100%',
    position: 'relative',
  },

  headerTop: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: '$gutter * 2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cuisineName: {
    position: 'absolute',
    paddingHorizontal: '$gutter * 2',
    bottom: '$gutter',
    fontSize: 26,
    color: '$color.color1',
    fontFamily: 'SfProDisplay-Bold',
    letterSpacing: 0.41,
  },
});

export default style;
