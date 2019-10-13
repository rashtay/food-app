/**
 * Capitalize first letter of each words.
 * @flow
 */
const ONE = 1;

export function toTitleCase(str: string) {
  return `${str[0].toUpperCase()}${str.slice(ONE, str.length)}`;
}
