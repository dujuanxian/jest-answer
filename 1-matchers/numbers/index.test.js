import { sum } from '../basic/index';

test('demo', () => {
  const result = sum(1, 1);
  const value = 1;

  expect(result).toBeGreaterThan(value);
});

test('result比3小', () => {
  const result = sum(1, 1);
  const value = 3;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toBeLessThan(value);
  // --end->
});

test('result等于3.0', () => {
  const result = sum(2.0, 1.0);
  const value = 3.0;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toBeCloseTo(value);
  // --end->
});
