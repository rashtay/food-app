/**
 * Author: Rahul Shetty
 * Date: 10/10/2019
 *
 * Smart component to toggle search
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { onToggleSearch } from 'actions/search';
import style from './style';

type Props = {
  iconStyle?: Object,
  onToggleSearch: () => void,
  isActive: boolean,
};

const ReduxSearch = (props: Props) => {
  const { iconStyle, onToggleSearch: _onToggleSearch, isActive } = props;
  const iconName = isActive ? 'ios-close-circle' : 'ios-search';

  return (
    <Icon
      style={[style.reduxSearchIcon, iconStyle]}
      name={iconName}
      onPress={_onToggleSearch}
    />
  );
};

ReduxSearch.defaultProps = {
  iconStyle: {},
};

const mapStateToProps = state => state.search;

export default connect(
  mapStateToProps,
  {
    onToggleSearch,
  },
)(ReduxSearch);
