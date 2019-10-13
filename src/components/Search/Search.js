import React, { useState, useEffect } from 'react';
import { View, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const HIDE = 0;
const SHOW = 1;

const Search = () => {
  const [searchText, onChangeText] = useState('');
  const [expand, onToggleExpand] = useState(false);
  const [expandAnim] = useState(new Animated.Value(HIDE));

  // On state change, start animating. Basically, we'll expand and shrink the input on pressing search
  useEffect(() => {
    Animated.timing(expandAnim, {
      toValue: expand ? SHOW : HIDE,
      duration: 500,
    }).start();
  }, [expand, expandAnim]);

  // Animate the styles based on expandAnim state changes
  const searchAnimStyle = {
    width: expandAnim.interpolate({
      inputRange: [HIDE, SHOW],
      outputRange: ['0%', '100%'],
    }),
    opacity: expandAnim.interpolate({
      inputRange: [HIDE, SHOW],
      outputRange: [HIDE, SHOW],
    }),
  };

  /**
   * Show close icon when the input is visible so that user can shrink the input
   * Show search icon when the input is shrinked so that when the user presses on search, the input is visible
   */
  const iconStyle = expand ? style.closeIcon : style.searchIcon;
  const iconName = expand ? 'ios-close-circle' : 'ios-search';

  return (
    <View style={style.container}>
      <Icon
        style={[style.icon, iconStyle]}
        name={iconName}
        onPress={() => onToggleExpand(!expand)}
      />
      <Animated.View style={[style.wrapper, searchAnimStyle]}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          placeholder="Search..."
          style={style.input}
        />
      </Animated.View>
    </View>
  );
};

export default Search;
