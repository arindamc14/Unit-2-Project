module.exports = (app, allModels) => {

  /*
   *  =========================================
   *    ALL ROUTES FOR SNS CONTROLLER
   *  =========================================
   
   */

  // require the controller
  const snsControllerCallbacks = require('./controller/sns')(allModels);


  // add the user related app.get or app.post callbacks here
  app.get('/', snsControllerCallbacks.loadIndex);
  app.get('/login', snsControllerCallbacks.logIn);
  app.post('/login', snsControllerCallbacks.loginPost);
  app.get('/signup', snsControllerCallbacks.signup);
  app.post('/signup', snsControllerCallbacks.signupPost);
  app.get('/logout', snsControllerCallbacks.logout);
  app.get('/allvenues', snsControllerCallbacks.loadAllVenues);
  app.post('/reviewPost/:id', snsControllerCallbacks.reviewPost);
  app.get('/reviewPost', snsControllerCallbacks.loadReviews);

};

