const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    if (userDb.length > 0) {
      return res.status(200).json({
        ok: true,
        message: 'Users found',
        users: userDb
      })
    } else {
      return res.status(200).json({
        ok: true,
        message: 'No users found',
        users: userDb
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
