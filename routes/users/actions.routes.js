const checkExist = require('../../middlewares/users/check-exist.middleware')
const welcome = require('../../controllers/users/actions/welcome.controller')
const goodbye = require('../../controllers/users/actions/goodbye.controller')

module.exports = function (router) {
  router.get('/users/:id/welcome', checkExist, welcome)
  router.get('/users/:id/goodbye', checkExist, goodbye)

  return router
}
