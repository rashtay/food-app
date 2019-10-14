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
});

export default style;
