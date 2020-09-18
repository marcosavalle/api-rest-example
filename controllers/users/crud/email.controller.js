const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    const position = userDb
      .map(obj => {
        return obj.id
      })
      .indexOf(req.params.id)

    const { email } = req.body

    userDb[position].email = email

    return res.status(200).json({
      ok: true,
      message: 'User updated',
      user: userDb[position]
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
