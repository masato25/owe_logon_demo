var Sequelize = require("sequelize");
var acct = "cepave",
    passwd = "youknow",
    database = "myowe";
var sequelize = new Sequelize(database, acct, passwd,
                { dialect: 'mysql' });

module.exports = {  Sequelize: function() {
                      return  Sequelize;
                    },
                    sequelize: function() {
                      return sequelize;
                    }
                 };
