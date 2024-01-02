const router = require('express').Router();
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');
const dashboardRoutes = require('./dashboard-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const homepageController = require('../../controllers/homepage-controller.js');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

router.get('/', homepageController);

module.exports = router;
