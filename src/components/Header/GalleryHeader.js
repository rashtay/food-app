/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to show gallery of images as header
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-navigation-stack';
import Carousel from 'components/Carousel/Carousel';
import Bookmark from 'components/Bookmark/Bookmark';
import BackButton from 'components/BackButton/BackButton';
import { toTitleCase } from 'utils/string';
import style from './style';

type Props = {
  backTitle: string,
  title: string,
  navigation: string,
  gallery: Array<string>,
};

const headerHeight = Header.HEIGHT;

const GalleryHeader = ({
  backTitle,
  title,
  navigation,
  gallery,
}: Props): React$Node => {
  return (
    <View style={style.galleryheader}>
      <Carousel gallery={gallery} />

      <View style={[style.galleryheaderTop, { top: headerHeight }]}>
        <BackButton prevName={toTitleCase(backTitle)} navigation={navigation} />

        <Bookmark />
      </View>

      <Text style={style.galleryTitle}>{title}</Text>
    </View>
  );
};

export default GalleryHeader;
