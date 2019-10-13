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

  container: {
    flex: 1,
  },

  listContainer: {
    paddingHorizontal: '$gutter * 2',
    paddingVertical: '$gutter',
  },

  categoryItem: {
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

  categoryContainer: {
    padding: '$gutter * 2',
  },

  categoryTagline: {
    color: '$color.color1_70',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 15,
    lineHeight: 14,
    textTransform: 'uppercase',
    letterSpacing: -0.24,
  },

  categoryName: {
    color: '$color.color1',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    textTransform: 'capitalize',
    letterSpacing: 0.36,
    marginTop: '$gutter',
  },
});

export default style;
