module.exports = () => {
  // 中间件
  return async function errorHandler(ctx, next) {
    console.log("我是errorHandler")
    return next()
  }
}