const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    const user = userDb.find(user => user.id === req.params.id)

    return res.status(200).json({
      ok: true,
      message: 'User found',
      user
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
