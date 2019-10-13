/**
 * Author: Rahul Shetty
 * Date:09/10/2019
 *
 * Common type definitions
 * @flow
 */
type Dispatch = (data: Object) => void;

type Screens = {
  [string]: Function | Object,
};

type DefaultState = {
  pending: boolean,
  result: any,
  err: string,
};
