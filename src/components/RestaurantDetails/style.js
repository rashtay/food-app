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

  instructions: {
    borderRadius: '$gutter',
    margin: '$gutter * 2',
    backgroundColor: '$color.color1',
    shadowColor: '$color.color2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  step: {
    padding: '$gutter * 2',
    borderTopWidth: 1,
    borderTopColor: '$color.color6',
    flexDirection: 'row',
  },

  noBorder: {
    borderTopWidth: 0,
  },

  stepNumber: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: '$color.color4',
  },

  stepDetails: {
    marginLeft: 12,
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
  },

  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },

  modalWrapper: {
    height: '70%',
    backgroundColor: '$color.color1',
  },
});

export default style;
