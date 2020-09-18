const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    const position = userDb
      .map(obj => {
        return obj.id
      })
      .indexOf(req.params.id)

    userDb.splice(position, 1)

    return res.status(200).json({
      ok: true,
      message: 'User deleted'
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
