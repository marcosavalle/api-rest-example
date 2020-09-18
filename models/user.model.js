const uniqid = require('uniqid')

module.exports = class User {
  constructor(name, surname, age, email) {
    this.id = uniqid()
    this.name = name
    this.surname = surname
    this.age = age
    this.email = email
  }

  welcome() {
    return `Welcome back ${this.name}!`
  }

  goodbye() {
    return `Bye ${this.name}! See you later!`
  }
}
