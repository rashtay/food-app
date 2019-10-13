/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    width: '100%',
    height: 280,
    marginVertical: '$gutter',
    borderRadius: '$gutter',
    overflow: 'hidden',
  },

  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  contentContainer: {
    padding: '$gutter * 2',
  },
});

export default style;
