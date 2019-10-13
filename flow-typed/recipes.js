/**
 * Author: Rahul Shetty
 * Date:09/10/2019
 *
 * Type definitions for the Recipes
 * @flow
 */

type Cuisines = {
  id: number,
  name: string,
  people: number,
  mins: number,
};

type Category = {
  id: number,
  name: string,
  tagline: string,
  imgURL: string,
  cuisines: Array<Cuisines>,
};

type Categories = Array<Category>;
