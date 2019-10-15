/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * @flow
 */

import EStylesheet from 'react-native-extended-stylesheet';

const style = EStylesheet.create({
  container: {
    margin: '$gutter * 2',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  pillBtn: {
    width: '22%',
    marginBottom: '$gutter',
  },

  pill: {
    height: 44,
    borderWidth: 1,
    borderColor: '$color.color3',
    borderRadius: '$gutter',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activePill: {
    backgroundColor: '$color.color3',
  },

  label: {
    color: '$color.color3',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },

  activeLabel: {
    color: '$color.color1',
  },
});

export default style;
