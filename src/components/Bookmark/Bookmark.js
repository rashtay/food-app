/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Component to bookmark
 * @flow
 */

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

const Bookmark = (): React$Node => {
  const [isBookmarked, toggleBookmark] = useState(false);
  const iconName = isBookmarked ? 'bookmark' : 'bookmark-o';

  return (
    <Icon
      name={iconName}
      style={style.bookmark}
      onPress={() => toggleBookmark(!isBookmarked)}
    />
  );
};

export default Bookmark;
