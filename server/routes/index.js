let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
  });
  
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
  });
  
  router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About Me' });
  });
  
  router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' });
  });
  
  router.get('/services', function(req, res, next) {
    res.render('index', { title: 'Services' });
  });
  
  router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact' });
  });

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
