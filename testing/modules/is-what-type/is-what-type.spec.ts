import { isWhatType } from './is-what-type.js';

it('Should return string when send a string value', () => {
  expect(isWhatType('15')).toEqual('string');
});

it('Should return number when send a numeric value', () => {
  expect(isWhatType(15)).toEqual('number');
});