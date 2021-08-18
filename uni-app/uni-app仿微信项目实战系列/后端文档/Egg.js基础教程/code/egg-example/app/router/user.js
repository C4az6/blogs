module.exports = app => {
  const { router, controller } = app;
  app.router.get('/user/list', controller.user.index)
  app.router.get('/user/read/:id', controller.user.read)
  app.router.post('/user/create', controller.user.create)
  app.router.post('/user/update/:id', controller.user.update)
  app.router.post('/user/destroy/:id', controller.user.destroy)
}