const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

//generate makepost form 
// thought I would need a login conditional here, but you have to be logged in to access dash anyway
router.get("/makepost", withAuth, (req, res) => {
    res.render("make-post")
  }
)

module.exports = router;
