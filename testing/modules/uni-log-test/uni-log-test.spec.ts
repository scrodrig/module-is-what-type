import { uniLogTest, isString, isStringLodash } from './uni-log-test.js';

it('renders with the correct text', () => {
  expect(uniLogTest()).toEqual('hello world');
});

it('should return true as `foo` is a string', () => {
  expect(isString('foo')).toBe(true);
});

it('should return true as `foo` is a string with lodash', () => {
  expect(isStringLodash('foo')).toBe(true);
});
