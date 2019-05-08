import { sum } from '../basic/index';

test('demo', () => {
  const result = null;

  expect(result).toBeNull();
});

test('result被定义', () => {
  const result = null;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toBeDefined();
  // --end->
});

test('匹配result为真', () => {
  const result = sum(1, 2) === 3;

  // <--start
  // TODO: 给出正确的assertion
  expect(result).toBeTruthy();
  // --end->
});
