import { fetchData, fetchDataWithError } from './index';

describe('promises', () => {
  test('demo - Promise解决后返回的结果为value的值', () => {
    const value = 'async data';
    return fetchData('data').then(data => {
      expect(data).toBe(value);
    });
  });
});

describe('async/await测试', () => {
  test('Promise解决后返回的结果为value的值', async () => {
    expect.assertions(1); // 验证一定数量的断言被调用, 否则一个fulfilled态的Promise不会让测试失败

    const fetchDataPromise = fetchData('data');
    const value = 'async data';

    // <--start
    // TODO: 测试fetchDataPromise解决后返回的结果为value的值，给出正确的assertion
    await expect(fetchDataPromise).resolves.toBe(value);
    // --end->
  });

  test('Promise被拒绝并返回错误信息', async () => {
    expect.assertions(1);
    const fetchDataPromise = fetchDataWithError();
    const value = 'error';

    // <--start
    // TODO: 测试fetchDataPromise抛出的错误信息为value的值，给出正确的assertion
    await expect(fetchDataPromise).rejects.toBe(value);
    // --end->
  });
});
