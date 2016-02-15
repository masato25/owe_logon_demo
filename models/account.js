var seq = require('../seque_conn/conn');
var Sequelize = seq.Sequelize(),
    sequelize = seq.sequelize(),
    passportLocalSequelize = require('passport-local-sequelize');

var Account = sequelize.define('Account', {
  id: { type: Sequelize.INTEGER, primaryKey: true},
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  salt: Sequelize.STRING
})

passportLocalSequelize.attachToUser(Account, {
	usernameField: 'username',
	hashField: 'password',
  keylen:  100,
  saltlen:  16,
  saltField: 'salt'
});

module.exports = Account;
