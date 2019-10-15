/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Tab Bar component
 * @flow
 */

import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { setTabBarHeight } from 'actions/tab-bar';

const S = EStylesheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderTopWidth: 1,
    borderTopColor: '$color.color6',
    shadowColor: '$color.color2',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

type Props = {
  setTabBarHeight: number => void,
  activeTintColor: string,
  inactiveTintColor: string,
  onTabPress: Function,
  onTabLongPress: Function,
  getAccessibilityLabel: Function,
  navigation: Object,
  renderIcon: Function,
};

const TabBar = (props: Props) => {
  const {
    renderIcon,
    // getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
    setTabBarHeight: _setTabBarHeight,
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <SafeAreaView>
      <View
        style={S.container}
        onLayout={event => _setTabBarHeight(event.nativeEvent.layout.height)}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableOpacity
              // eslint-disable-next-line react/no-array-index-key
              key={routeIndex}
              style={S.tabButton}
              onPress={() => {
                onTabPress({ route });
              }}
              onLongPress={() => {
                onTabLongPress({ route });
              }}
              accessibilityLabel={getAccessibilityLabel({ route })}>
              {renderIcon({ route, focused: isRouteActive, tintColor })}

              {/* <Text>{getLabelText({ route })}</Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default connect(
  null,
  {
    setTabBarHeight,
  },
)(TabBar);
