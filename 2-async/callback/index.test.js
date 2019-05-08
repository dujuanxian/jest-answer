import { fetchData, fetchDataWithError } from './index';

test('demo - 异步调用回调函数返回的结果为value', done => {
  function callback(data) {
    expect(data).toBe('Value');
    done();
  }
  fetchData(callback);
});

test('异步调用失败回调函数返回的结果', done => {
  function failedCallback(error) {
    // <--start
    // TODO: 测试error的值，给出正确的assertion

    expect(error).toBe('Error');
    // --end->
    done();
  }
  fetchDataWithError(() => {}, failedCallback);
});
