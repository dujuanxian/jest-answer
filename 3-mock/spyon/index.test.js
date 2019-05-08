import fetch from './index';
import * as request from '../../2-async/promises/index';

test('spyOn fetchData函数并异步返回value的值', () => {
  const value = 'mock value';

  // <--start
  // TODO: spyOn request中的fetchData函数
  jest.spyOn(request, 'fetchData').mockResolvedValue(value);
  // --end->

  expect(fetch()).resolves.toBe(value);
});
