/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * @flow
 */

import { connect } from 'react-redux';
import Recipes from 'components/Recipes/Recipes';
import { getRecipeCategories } from 'actions/recipes';

const mapStateToProps = (state: Object) => state.recipes;

export default connect(
  mapStateToProps,
  {
    apiCall: getRecipeCategories,
  },
)(Recipes);
