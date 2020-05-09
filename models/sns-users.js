/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  const sha256 = require('js-sha256');
  // `dbPoolInstance` is accessible within this function scope

  let getVenues = (callback) => {

    let query = 'SELECT * FROM venuesdb';

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };


  let signup = (dataIn, callback) => {
    var username = dataIn.username;
    var password = dataIn.password;
    var confirm = dataIn.confirm;

    password = sha256(password);
    confirm = sha256(confirm);
    if (password == confirm) {
      let query = 'INSERT INTO userdb (username,password) VALUES($1,$2) RETURNING userid';
      const values = [username, password];
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {

          // invoke callback function with results after query has executed
          callback(error, null);

        } else {

          // invoke callback function with results after query has executed
          if (queryResult.rows.length > 0) {
            // console.log(queryResult.rows);
            callback(null, queryResult.rows);
          } else {
            callback(null, null);

          }
        }
      });
    }
  };

  let login = (dataIn, callback) => {
    var username = dataIn.username;
    var password = dataIn.password;
    password = sha256(password);

    let query = 'SELECT * FROM userdb WHERE username = $1';
    const values = [username];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          var result = queryResult.rows[0];
          var checkPass = result.password;
          if (checkPass == password) {
            callback(null, result);
          }
          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });


  };

  let makePost = (dataIn, callback) => {
    var userid = dataIn.userid;
    var review = dataIn.review;
    var venueid = dataIn.venueid;
    
      let query = 'INSERT INTO reviewsDb (userid, message, venueid, postdate) VALUES ($1,$2,$3, current_timestamp) RETURNING reviewid';
      const values = [userid, review, venueid];
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {
          console.log('error in calling on database')
          // invoke callback function with results after query has executed
          callback(error, null);

        } else {

          // invoke callback function with results after query has executed
          if (queryResult.rows.length > 0) {
              callback(null, queryResult.rows);
            
             console.log(queryResult.rows);

          } else {
            callback(null, null);

          }
        }
      });      

    };

    let getReviews = (callback) => {

    let query = 'SELECT * FROM reviewsDb INNER JOIN venuesdb on reviewsDb.venueid = venuesDb.venueid INNER JOIN userDb on reviewsDb.userid =userDb.userid';

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  return {
    getVenues,
    signup,
    login,
    makePost,
    getReviews
  };
};