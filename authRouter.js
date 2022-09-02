const Router = require('express')
const router = new Router();
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleWare = require('./middlewaree/authMiddleware')

router.post('/registration', [
  check('username', 'Username cant be empty').notEmpty(),
  check('password', 'Password should consists of more than 4 letters').isLength({min: 4, max: 16})
], controller.registration)
router.post('/reviews', [
    check('author', 'Author cant be empty').notEmpty(),
    check('title', 'Title cant be empty').notEmpty(),
    check('type', 'Type should be neutral|positive|negative').notEmpty(),
  ], controller.postReview)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
router.get('/getReviews', controller.getReviews)


module.exports = router;