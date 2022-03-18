var db = require('../db');
const connection = db.connection;

module.exports = {
  getAll: function () {
    // I believe we need to put the connection.query stuff here
  },
  create: function ({ username }, cb) {
    //check if incoming username exists, and if it does then send userid in response
    //if not, create the username and add it to the database, send new userid
    connection.query(`SELECT id FROM users WHERE username = '${ username }'`, (err, results) => {
      if (err) {
        throw err;
      } else if (results.length === 0) {
        connection.query(`INSERT INTO users (username) VALUES ('${ username }')`, (err, results) => {
          if (err) {
            throw err;
          } else {
            cb(null, results.insertId);
          }
        });
      } else {
        cb(null, results[0].id);
      }
    });
  }
};
