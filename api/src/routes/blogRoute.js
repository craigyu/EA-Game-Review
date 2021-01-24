const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getBlogList());
router.get('/:blog_id', blogController.getSingleBlog());
router.post('/', blogController.postBlog());

module.exports = router;