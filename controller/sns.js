module.exports = (db) => {
  const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   const output ={};
   output.loggedIn = {};

  let loadIndex = (request, response) => {

        db.sns.getVenues((error, result) => {
        // const output ={};
        var allVenues = result;
     
        output.venues = allVenues;
        console.log(output);
        response.render('home', output);
      });
    };

    let loadAllVenues = (request, response) => {

        db.sns.getVenues((error, result) => {
        // const output ={};
        var allVenues = result;
     
        output.venues = allVenues;
        console.log(output);
        response.render('allvenues', output);
      }


      );
    };
  

  let logIn = (request, response) => {

    response.render('login');
  };
  let signup = (request, response) => {

    response.render('signup');

  };

  let signupPost = (request, response) => {
    var dataIn = request.body;
    db.sns.signup(dataIn, (error, result) => {
      var username = request.body.username;
      console.log(result);
      var userid = result[0].userid;
      response.cookie('username', username);
      response.cookie('userid', userid);
      response.cookie('loggedIn', sha256('true'));
      output.loggedIn = {'loggedIn':sha256('true'), 'username': result.username, 'userid': result.userid};
      console.log(output);
      response.redirect('/');
    });
  };

  let loginPost = (request, response) => {
    var dataIn = request.body;
    db.sns.login(dataIn, (error, result) => {

      if (error) {

        console.log(error);
        response.send('Your username or password is invalid!');
      }
      else {
        response.cookie('username', result.username);
        response.cookie('userid', result.userid);
        response.cookie('loggedIn', sha256('true'));
        output.loggedIn = {'loggedIn':sha256('true'), 'username': result.username, 'userid': result.userid};
        console.log(output);
        response.redirect('/');
      }
      
    });
  };

  let logout = (request, response) => {

    response.cookie('username', "");
    response.cookie('userid', "");
    response.cookie('loggedIn', "");
    response.redirect('/');output.loggedIn = {};

  };

  let reviewPost = (request, response) => {
    var dataIn = {};
    dataIn.venueid = (request.params.id);
    dataIn.review = request.body.review;
    dataIn.userid = output.loggedIn.userid;


    db.sns.makePost(dataIn, (error, result) => {

      if (error) {
        console.log('error from models side!!!!!!!!!!!!!!')
        console.log(error);

      }
      else {

        response.redirect('/reviewPost');
      }
      
    });

  }
  let loadReviews = (request, response) => {

        db.sns.getReviews((error, result) => {
        var allReviews = result;
        output.reviews = allReviews;

        response.render('reviewPost', output);
      });
    };


    return {
    loadIndex: loadIndex,
    logIn: logIn,
    signup: signup,
    signupPost: signupPost,
    loginPost: loginPost,
    logout: logout,
    loadAllVenues: loadAllVenues,
    reviewPost: reviewPost,
    loadReviews: loadReviews
    // loadMatchSchedule: loadMatchSchedule,
    // 
    // postReview: postReview,
    // newFav: newFav,
    // addFav: addFav
  };

}