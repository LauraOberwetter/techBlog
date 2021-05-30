const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

//if current user_id matches blog posts, GET posts
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postBody = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
  } catch (err) {
    console.log(err);
  }
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

//generate makepost form 
// thought I would need a login conditional here, but you have to be logged in to access dash anyway
router.get("/makepost", withAuth, (req, res) => {
    res.render("make-post")
  }
)

module.exports = router;
