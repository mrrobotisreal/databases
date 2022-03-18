var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        throw err;
      } else {
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let messageObj = req.body;
    models.messages.create(messageObj, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('results (data) -> ', data);
        res.send('success');
      }
    });
  } // a function which handles posting a message to the database
};

//these take in a request, hand it off to the model handlers, and pass back a response from the model handlers.