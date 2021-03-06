const express = require('express');
const user = require('../controllers/usercontroller');

const appRoute = express.Router();

appRoute.get('/', (req, res) => {
  res.render('index', { variable: 'Hello Guys' });
});

appRoute.get('/mydashboard', (req, res) => {
  const { token } = req.query;
  res.render('Pages/Dash', {
    token,
  });
});

appRoute.get('/about', (req, res) => {
  res.render('Pages/About');
});

appRoute.get('/register', (req, res) => {
  res.render('Pages/Register', {
    error: null,
    data: null,
  });
});

appRoute.get('/login', (req, res) => {
  const { successMsg } = req.query;
  res.render('Pages/Login', {
    successMsg,
    error: null,
  });
});

appRoute.get('/forgotpassword', (req, res) => {
  const { successMsg } = req.query;
  res.render('Pages/Forgotpassword', {
    successMsg,
    error: null,
  });
});

appRoute.post('/login', user.login);
appRoute.post('/register', user.signup);
appRoute.get('/logout', user.isAuthenticated, user.logout);
appRoute.get('/dashboard', user.isAuthenticated, user.dashboard);
appRoute.get('/googleauth', user.googleauth);
appRoute.get('/google/callback', user.googlecallback);


module.exports = appRoute;
