/* eslint-disable prefer-promise-reject-errors */
export function fetchData(callback) {
  setTimeout(() => {
    callback('Value');
  }, 0);
}

export async function fetchDataWithError(successCallback, failedCallback) {
  try {
    await Promise.reject('Error');
  } catch (e) {
    failedCallback(e);
  }
}
