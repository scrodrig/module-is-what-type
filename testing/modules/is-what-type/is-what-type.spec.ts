import { isWhatType } from './is-what-type.js';

it('renders with the correct text', () => {
  expect(isWhatType()).toEqual('hello world');
});
