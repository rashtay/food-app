/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  $size: 20,

  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '$color.color6',
  },

  checkbox: {
    width: '$size',
    height: '$size',
    borderRadius: '$size/2',
    borderWidth: 1,
    borderColor: '$color.color3',
  },

  checked: {
    backgroundColor: '$color.color3',
  },

  labels: {
    marginLeft: '$gutter * 2',
  },

  title: {
    fontSize: 17,
    lineHeight: 22,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: '$color.color4',
    paddingTop: '$gutter/2',
  },

  disabled: {
    opacity: 0.5,
  },
});

export default style;
