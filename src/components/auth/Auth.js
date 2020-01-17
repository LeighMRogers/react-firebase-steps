import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import googleImage from './Sign-in-with-Google.png';
// import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    // GoogleAuthProvider and signInWithPopup are Firebase things
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  render() {
    return (
      <div className="Auth">
        <button id="google-auth" className="btn btn-secondary" onClick={this.loginClickEvent}>
            Login with Google
          {/* <img src={googleImage} alt="Google Auth Button" /> */}
        </button>
      </div>
    );
  }
}
export default Auth;