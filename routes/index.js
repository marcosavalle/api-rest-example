const usersCrud = require('./users/crud.routes')
const usersActions = require('./users/actions.routes')

module.exports = function (router) {
  usersCrud(router)
  usersActions(router)

  return router
}
