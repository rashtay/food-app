/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * @flow
 */

import { connect } from 'react-redux';
import Restaurants from 'components/Restaurants/Restaurants';
import { getRestaurants } from 'actions/restaurants';

const mapStateToProps = (state: Object) => state.restaurants;

export default connect(
  mapStateToProps,
  {
    apiCall: getRestaurants,
  },
)(Restaurants);
