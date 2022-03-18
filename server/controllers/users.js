var models = require('../models');

module.exports = {
  get: function (req, res) {
    // todo
  },
  post: function (req, res) {
    let userObj = req.body;
    models.users.create(userObj, (err, results) => {
      if (err) {
        console.log(500, err);
      } else {
        res.send(200, results);
      }
    });
  }
};
