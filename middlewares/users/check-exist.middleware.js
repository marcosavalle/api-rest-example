const userDb = require('../../data/users')

module.exports = function (req, res, next) {
  try {
    const user = userDb.find(user => user.id === req.params.id) || null
    if (user) {
      next()
    } else {
      return res.status(404).json({
        ok: false,
        message: 'Not found'
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
