/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * Action for appointment related operations
 * @flow
 */
import api from 'utils/api';

export const getRecipeCategories = () => (dispatch: Dispatch) => {
  api.get(
    `recipe-categories`,
    {
      eventBase: 'RECIPE_CATEGORIES',
    },
    dispatch,
  );
};
