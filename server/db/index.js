var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'



/*To-dos:
1. In this file, set up a connection to chat database.
2. Export the connection to /models in order to use connection in models/messages.js and models/users.js
3. in the models/messages.js and models/users.js, 'read' and 'write' to the database at the correct tables.
4. Export these query handler guys to the controllers, who handle the client's requests/responses.
*/

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

