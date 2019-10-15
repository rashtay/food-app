/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show image carousel
 * @flow
 */

import React, { useState } from 'react';
import { Image, View, FlatList } from 'react-native';
import PlaceholderImage from 'assets/images/placeholder-dark.jpg';
import style from './style';

type Props = {
  gallery: Array<string>,
};

const SLIDE_INDEX = 0;

const Carousel = (props: Props) => {
  const { gallery } = props;
  const [pageNum, setPageNum] = useState(SLIDE_INDEX);

  const keyExtractor = (item: string) => item;

  const renderSlide = ({ item }: Object) => (
    <View style={style.imgContainer}>
      <Image
        source={{ uri: item }}
        defaultSource={PlaceholderImage}
        style={style.img}
      />

      <View style={style.imgOverlay} />
    </View>
  );

  const renderDots = (imgGallery: Array<string>) =>
    imgGallery.map((dot: string, index: number) => (
      <View
        key={dot}
        style={[style.dot, index === pageNum && style.activeDot]}
      />
    ));

  const onScrollEnd = e => {
    const { contentOffset } = e.nativeEvent;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setPageNum(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View style={style.container}>
      <FlatList
        data={gallery}
        renderItem={renderSlide}
        extraData={props}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        pagingEnabled
        horizontal
      />

      <View style={style.dotContainer}>{renderDots(gallery)}</View>
    </View>
  );
};

export default Carousel;
