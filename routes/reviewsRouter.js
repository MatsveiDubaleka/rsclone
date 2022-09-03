const Router = require('express')
const router = new Router();
const controller = require("../controllers/reviewsController");
const { check } = require("express-validator");

router.post('/postReview', [
  check('author', 'Author cant be empty').notEmpty(),
  check('title', 'Title cant be empty').notEmpty(),
  check('type', 'Type should be neutral|positive|negative').notEmpty(),
], controller.postReview)
router.get('/getReviews', controller.getReviews)

module.exports = router;