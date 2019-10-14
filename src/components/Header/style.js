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
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
  },

  galleryheader: {
    width: '100%',
    position: 'relative',
  },

  galleryheaderTop: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: '$gutter * 2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  galleryTitle: {
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
