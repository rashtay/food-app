/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },

  wrapper: {
    height: '70%',
    backgroundColor: '$color.color1',
  },

  header: {
    width: '100%',
    paddingVertical: '$gutter * 2',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '$color.color6',
    position: 'relative',
  },

  icon: {
    position: 'absolute',
    left: '$gutter * 2',
    top: '$gutter * 2',
    color: '$color.color3',
    fontSize: 24,
  },

  title: {
    textAlign: 'center',
    color: '$color.color3',
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
  },
});

export default style;
