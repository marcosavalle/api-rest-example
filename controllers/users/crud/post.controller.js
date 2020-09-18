const User = require('../../../models/user.model')
const userDb = require('../../../data/users')

module.exports = function (req, res) {
  try {
    const { name, surname, age, email } = req.body
    const user = new User(name, surname, age, email)
    userDb.push(user)

    return res.status(200).json({
      ok: true,
      message: 'User created',
      user_id: user.id
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
