const userModel = require('../models/userModel');

class userController {
  static getUsers() {
    return async (req, res) => {
        const data = await userModel.query().skipUndefined();
        res.status(200).send(data);
    };
  }
}

module.exports = userController;