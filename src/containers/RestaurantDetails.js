/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * @flow
 */

import { connect } from 'react-redux';
import RestaurantDetails from 'components/RestaurantDetails/RestaurantDetails';

const mapStateToProps = (state: Object) => state.tabBar;

export default connect(
  mapStateToProps,
  {},
)(RestaurantDetails);
