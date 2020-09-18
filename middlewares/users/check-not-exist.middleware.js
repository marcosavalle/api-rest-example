const userDb = require('../../data/users')

module.exports = function (req, res, next) {
  try {
    const user = userDb.find(user => user.name === req.body.name) || null
    if (!user) {
      next()
    } else {
      return res.status(400).json({
        ok: false,
        message: `User ${req.body.name} already exist!`
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
