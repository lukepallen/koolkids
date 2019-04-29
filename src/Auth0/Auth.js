import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import { BehaviorSubject } from 'rxjs';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userId;
  user = new BehaviorSubject();
  auth0Manage;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid profile read:current_user update:current_user update:users create:current_user_metadata update:current_user_metadata create:users_app_metadata update:users_app_metadata'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    this.getManagement();

    if (this.accessToken) {
      this.auth0.client.userInfo(this.accessToken, (err, user) => {
        if (err) {
          console.log(err)
        } else {
          this.userId = user.sub;
          this.auth0Manage.getUser(this.userId, (err, fullUser) => {
            if (err) {
              console.log(err);
            } else {
              this.user.next(fullUser);
            }
          })
        }
      })
    }
    // navigate to the home route
    history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      return_to: window.location.origin
    });

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

  updateMetadata() {
    let metadata = {
      "enrolled": true
    }
    return new Promise(resolve => {
      this.auth0Manage.patchUserMetadata(this.userId, metadata, (err, res) => {
        if (err) {
          resolve({error: err});
        } else {
          resolve({results: res});
        }
      });
    });
    
  }

  getManagement() {
    this.auth0Manage = new auth0.Management({
      domain: AUTH_CONFIG.domain,
      token: AUTH_CONFIG.managementToken
    });
  }
}
