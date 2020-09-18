const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    const user = userDb.find(user => user.id === req.params.id) || null

    return res.status(200).json({
      ok: true,
      message: 'User found',
      welcome: user.welcome()
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
