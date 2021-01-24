const blogModel = require('../models/blogModel');
const {transaction, Model} = require('objection');

class blogController {
  static getBlogList() {
    return async (req, res) => {
      try {
        const data = await blogModel.query().select('blog_id', 'title', 'blog.user_id', 'users.user_name', 'updated_at', 'img_url')
          .join('users', 'users.user_id', '=', 'blog.user_id');
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send(err);
      }
    };
  }

  static getSingleBlog() {
    return async (req, res) => {
      try {
        const blog_id = req.params.blog_id;
        const data = await blogModel.query().select('*').where('blog_id', blog_id).join('users', 'users.user_id', '=', 'blog.user_id');
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send(err);
      }
    };
  }

  static postBlog() {
    return async (req, res) => {
      const trx = await transaction.start(Model.knex());
      try {
        await blogModel.query(trx).insert(req.body);
        await trx.commit();
        res.sendStatus(201)
      } catch (err) {
        await trx.rollback();
        res.status(400).send(err);
      }
    }

  }
}

module.exports = blogController;