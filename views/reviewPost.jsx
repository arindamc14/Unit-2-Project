var React = require('react');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');

class Review extends React.Component {
  render() {
    console.log('everything in my output!!!!!!')
    console.log(this.props)

    var showLogin = 'd-inline';
    var showLogout = 'd-none';
    var addReview = 'd-none';
    var welcome = 'd-none';
      

    if (this.props.loggedIn.loggedIn !== "" || this.props.loggedIn.loggedIn !== undefined) {
      var loginCheck = this.props.loggedIn.loggedIn;
      
    } 


    if (loginCheck == sha256('true')){
      var showLogin = 'd-none';
      var showLogout = 'd-inline';
      var addReview = 'd-inline';
      var welcome = 'd-inline';

      // var welcome-message = 'd-inline';
    }
    else{
      var showLogin = 'd-inline';
      var showLogout = 'd-none';
      var addReview = 'd-none';
      var welcome = 'd-none';
    }

     const reviewsList = this.props.reviews.map((element, i) => {
    
        return (

            <div key={i} className="col bg-dark  border-top border-bottom border-secondary pt-2 pb-5 text-light">
            <div className ="font-weight-bold">Venue: {element.name}</div>
            <div>Review: {element.message}</div>
            <div>By: {element.username}</div>

            </div>
            

          );
      })
    

   
    return (

      <html>

      <head>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <title>Salt & Soccer</title>
      <meta name="description" content="A community for football enthusiasts to locate venues showing live football matches in Singapore" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
      
      </head>

      <body className="bg-dark">

      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Salt & Soccer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      <li className="nav-item dropdown">
      </li>      
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Login/ Signup/ Logout</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className ={showLogin}>
        <a className="dropdown-item" href="/login">Login</a>
        <a className="dropdown-item" href="/signup">Signup</a>
        </div>
        <div className ={showLogout}>
        <a className="dropdown-item" href="/logout">Logout</a>
        </div>
        </div>
      </li>      
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Venues</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="/allvenues">See All Venues</a>
      <a className="dropdown-item" href="/reviewPost">Lookup Reviews</a>
      </div>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Lookup match schedule</a>
      </li>
      </ul>

      </div>
      </nav>

      <div className= {welcome}>
      <h6 className = "text-light">Welcome {this.props.loggedIn.username}!</h6>
      </div>
      
      <h6 className = "text-light">All Reviews</h6>


      
      <ul> {reviewsList}


      </ul>
      </div>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      </body>

      </html>
      );
  }
}


module.exports = Review;