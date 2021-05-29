const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

//if current user_id matches blog posts, GET posts
router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
          },
      });

  });