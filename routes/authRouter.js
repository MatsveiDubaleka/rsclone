const Router = require('express')
const router = new Router();
const controller = require('../controllers/authController')
const {check} = require("express-validator")

router.post('/registration', [
  check('username', 'Username cant be empty').notEmpty(),
  check('password', 'Password should consists of more than 4 letters').isLength({min: 4, max: 16})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router;