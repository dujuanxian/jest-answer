import { sum, person } from './index';

test('demo', () => {
  const result = 3;
  const value = 3;

  expect(result).toBe(value);
});

test('sum的结果为3', () => {
  const result = sum(1, 2);
  const value = 3;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toBe(value);
  // --end->
});

test('sum的结果不为3', () => {
  const result = sum(2, 2);
  const value = 3;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).not.toBe(value);
  // --end->
});

test('person对象的值', () => {
  const result = person('Tom');
  const value = {
    name: 'Tom'
  };

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toEqual(value);
  // --end->
});
