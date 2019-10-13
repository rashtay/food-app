/**
 * Author: Rahul Shetty
 * Date: 09/10/2019
 *
 * Layout dimension related variables for calculating dimensions.
 *
 * @flow
 */
import { Dimensions, StatusBar, Platform } from 'react-native';

export const deviceWidth: number = Dimensions.get('window').width;

export const deviceHeight: number =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height - StatusBar.currentHeight;
