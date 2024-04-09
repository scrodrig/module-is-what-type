import _ from 'lodash';

/**
 * returns 'hello world'
 */
export function uniLogTest() {
  return 'hello world';
}

/**
 * determines whether `value` is of type string.
 */
export function isString(value: string) {
  return typeof value === 'string';
}

export const isStringLodash = (value: string) => _.isString(value);
