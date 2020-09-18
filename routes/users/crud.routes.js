const checkExist = require('../../middlewares/users/check-exist.middleware')
const checkNotExist = require('../../middlewares/users/check-not-exist.middleware')
const fullValidation = require('../../middlewares/users/full-validation.middleware')
const emailValidation = require('../../middlewares/users/email-validation.middleware')
const post = require('../../controllers/users/crud/post.controller')
const get = require('../../controllers/users/crud/get.controller')
const put = require('../../controllers/users/crud/put.controller')
const del = require('../../controllers/users/crud/delete.controller')
const all = require('../../controllers/users/crud/all.controller')
const email = require('../../controllers/users/crud/email.controller')

module.exports = function (router) {
  router.post('/users', fullValidation, checkNotExist, post)
  router.get('/users', all)
  router.get('/users/:id', checkExist, get)
  router.put('/users/:id', fullValidation, checkExist, put)
  router.delete('/users/:id', checkExist, del)
  router.patch('/users/:id/email', emailValidation, checkExist, email)

  return router
}
