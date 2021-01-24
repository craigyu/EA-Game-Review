const commentModel = require('../models/commentModel');
const {transaction, Model} = require('objection');

class commentController {
  static getCommentsByBlogID() {
    return async (req, res) => {
      const blog_id = req.params.blog_id;
      try {
        const data = await commentModel.query().select('*').where('blog_id', blog_id).join('users', 'users.user_id', '=', 'comment.user_id');
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send(err);
      }
    };
  }

  static postComment() {
    return async (req, res) => {
      const trx = await transaction.start(Model.knex());
      try {
        await commentModel.query(trx).insert(req.body);
        await trx.commit();
        res.sendStatus(201)
      } catch (err) {
        await trx.rollback();
        res.status(400).send(err);
      }
    };
  }
}

module.exports = commentController;