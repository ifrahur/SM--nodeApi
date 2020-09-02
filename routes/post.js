const express = require("express");
const { getPost, createPost } = require("../controller/posts");
const { createPostValidator } = require("../validator/index");
const { userById } = require("../controller/user");
const { requireSignin } = require("../controller/auth");

const router = express.Router();

router.get("/", requireSignin, getPost);

router.post(
  "/post/new/:userId",
  requireSignin,
  createPost,
  createPostValidator
);

router.param("userId", userById);

module.exports = router;
