const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:blog_id', commentController.getCommentsByBlogID());

router.post('/', commentController.postComment());

module.exports = router;