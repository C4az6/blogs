module.exports = app => {
  const { router, controller } = app;
  // posts.js对应的资源路由
  router.resources('posts', '/api/posts', controller.posts)
}