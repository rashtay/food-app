/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show list of restaurants in the vicinity
 * @flow
 */

import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import style from './style';

type Props = {
  imgURL: string,
  onPress: Function,
  children: React$Node,
  containerStyle?: Object,
};

const ImageCard = ({
  imgURL,
  onPress,
  children,
  containerStyle,
}: Props): React$Node => (
  <TouchableOpacity onPress={onPress}>
    <View style={[style.container, containerStyle]}>
      <ImageBackground source={{ uri: imgURL }} style={style.imgBackground}>
        {children}
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

ImageCard.defaultProps = {
  containerStyle: {},
};

export default ImageCard;
