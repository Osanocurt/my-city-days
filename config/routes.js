const router = require('express').Router();
const authController = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const oauthController = require('../controllers/oauth');
const usersController = require('../controllers/users');

router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook);

router
  .get('/users', usersController.index);

router.route('/users/:id')
  .get(usersController.show)
  .put(secureRoute, usersController.update)
  .delete(secureRoute, usersController.delete);


module.exports = router;
