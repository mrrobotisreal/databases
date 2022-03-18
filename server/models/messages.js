var db = require('../db');
const connection = db.connection;

module.exports = {
  getAll: function (cb) {
    connection.query(`SELECT m.text, u.username, r.roomname FROM messages m INNER JOIN rooms r ON
    r.id = m.room INNER JOIN users u ON m.userid = u.id`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        cb(null, results);
      }
    });
  }, // a function which produces all the messages
  create: function ({ username, text, roomname }, cb) {
    //insert username into users table which will auto-increment the id, id must associate to messages table
    //thoughts: ^ will be of type connection.query(INSERT..., (err, result) => )
    //insert roomname into rooms table which ^^^ the id, id must associate to messages table
    //insert text into messages table, find a way to associate foreign keys with previously entered ids ^

    //user,rooms -> messages


    connection.query('INSERT INTO users (username, friend) VALUES (?, false)', [username], (err, userresults) => {
      if (err) {
        console.log(err);
      } else {
        console.log('this is the userId -> ', userresults.insertId);
        connection.query('INSERT INTO rooms (roomname) VALUES (?)', [roomname], (err, roomresults) => {
          if (err) {
            console.log('rooms err -> ', err);
          } else {
            connection.query('INSERT INTO messages (text, userid, room) VALUES (?, (subQ user), (subQ room))', [text, username.insertId, roomname.insertId], (err, results) => {
              if (err) {
                console.log('messages err -> ', err);
              } else {
                cb(null, 'success');
              }
            });
          }
        });
      }
    });

    //store

    //final, altogether messages query
  } // a function which can be used to insert a message into the database
};
//these functions are 'handlers' that actually touch the database, ie, intake an
//object and add it to the table

// check to see if something already exists in db