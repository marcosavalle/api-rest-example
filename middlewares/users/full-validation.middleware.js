const schema = require('../../validations/users/full.validation')

module.exports = function (req, res, next) {
  try {
    const result = schema.validate(req.body)

    if (result.error) {
      return res.status(400).json({
        ok: false,
        message: 'Bad request',
        details: result.error.details[0].message
      })
    } else {
      next()
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Server Error'
    })
  }
}
