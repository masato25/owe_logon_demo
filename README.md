# Owl_logon_demo

## Getting start
* create mysql table
```
CREATE TABLE Accounts (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     username CHAR(100) NOT NULL,
     password CHAR(200) NOT NULL,
     email CHAR(150) NOT NULL,
     salt CHAR(32) NOT NULL,
     createdAt TIMESTAMP,
     updatedAt TIMESTAMP,
     PRIMARY KEY (id)
);
```
* npm install
* node bin/www
