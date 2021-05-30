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
// make new post after clicking btn
router.post("/", withAuth, (req, res) => {
    BlogPosts.create({
      user_id: req.session.user_id,
      title: req.body.newTitle,
      content: req.body.newPostBody,
    })
      .then(() => res.redirect("/dashboard"))
      .catch((err) => res.status(500).json(err));
  });

  });
