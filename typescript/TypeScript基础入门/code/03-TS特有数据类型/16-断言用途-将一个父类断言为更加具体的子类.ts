/* demo-01
class ApiError extends Error {
  code: number = 0;
}

class HttpError extends Error {
  satusCode: number = 200;
}

function isApiError(error: Error) {
  // if (typeof (error as ApiError).code === 'number') {
  //   return true
  // }
  if (error instanceof ApiError) {
    // 判断传递进来的error实例是否是ApiError的实例对象
    return true
  }
  return false
} */

interface ApiError extends Error {
  code: number;
}

interface HttpError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  // if (error instanceof ApiError) {
  //   // ApiError 是一个 接口, 不是一个类，这里无法使用instanceof进行判断,只能使用断言
  //   return true
  // }
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}

