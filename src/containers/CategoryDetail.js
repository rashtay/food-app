/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * @flow
 */

import CategoryDetail from 'components/CategoryDetail/CategoryDetail';
import { connect } from 'react-redux';

const mapStateToProps = state => state.search;

export default connect(mapStateToProps)(CategoryDetail);
