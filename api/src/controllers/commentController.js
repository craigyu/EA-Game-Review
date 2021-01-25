const commentModel = require('../models/commentModel');
const userModel = require('../models/userModel');
const blogModel = require('../models/blogModel');
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
      const data = req.body;
      const user_id = data.user_id;
      const blog_id = data.blog_id;
      try{
        // check if user exists
        let user = await userModel.query(trx).select('*').where('user_id', user_id);
        // check if blog exists
        let blog = await blogModel.query(trx).select('*').where('blog_id', blog_id);

        let errorMSg;

        if(!user.length){
          errorMSg = 'user does not exist'
        }
        if(!blog.length){
          errorMSg = 'blog does not exist'
        }
        if(!blog.length && !user.length){
          errorMSg = 'user and blog do not exist'
        }

        if(user.length === 1 && blog.length === 1){
          await commentModel.query(trx).insert(req.body);
          await trx.commit();
          res.sendStatus(201)
        }else{
          await trx.rollback();
          res.status(400).send(errorMSg)
        }
      }
      catch(err){
        await trx.rollback();
        res.status(400).send(err);
      }
    };
  }
}

module.exports = commentController;