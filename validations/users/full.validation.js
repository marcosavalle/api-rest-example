const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  surname: Joi.string().min(2).max(15).required(),
  age: Joi.number().integer().min(1).max(150).required(),
  email: Joi.string().email().required()
})
