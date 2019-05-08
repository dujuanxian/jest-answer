import { sum } from '../../1-matchers/basic/index'; // eslint-disable-line no-unused-vars
import { fetchData } from '../../2-async/promises/index'; // eslint-disable-line no-unused-vars

test('demo - mock sum的实现函数返回3', () => {
  const mock = jest.fn(() => 3);
  const value = 3;

  expect(mock('sum')).toBe(value);
});

test('mock sum的返回值为3', () => {
  const mock = jest.fn();
  const value = 3;

  // <--start
  // TODO: 改变mock返回值
  mock.mockReturnValue(3);
  // --end->

  expect(mock('sum')).toBe(value);
});

test('mock fetchData异步调用返回3', () => {
  const mock = jest.fn();
  const value = 3;

  // <--start
  // TODO: 改变mock返回值
  mock.mockResolvedValue(3);
  // --end->

  expect(mock('fetchData')).resolves.toBe(value);
});
