const router = require('express').Router();
const offersController = require('../controllers/offers');
const authController = require('../controllers/auth');
// const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register);
  // .post('/auth/facebook', oauthController.facebook)
  // .post('/auth/github', oauthController.github);


router.route('/offers')
  .get(offersController.index)
  .post(secureRoute, offersController.create);

router.route('/offers/:id')
  .get(offersController.show)
  .put(secureRoute, offersController.update)
  .delete(secureRoute, offersController.delete);

module.exports = router;
