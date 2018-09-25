import decode from 'jwt-decode';

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:3000'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.getUserId = this.getUserId.bind(this)
  }

  login(email, password){
    return this.fetch(`${this.domain}/users/sign_in`, { //Our backend endpoint
      method: 'POST',
      body: JSON.stringify({
        user: { //pass in email, password from login form
          email,
          password
        }
      })
    })
  }

  register(user){
    return this.fetch(`${this.domain}/users`, { //Our backend endpoint
      method: 'POST',
      body: JSON.stringify(user),
    }).then(res => res);
  }

  loggedIn(){ // A check to see if user is logged in
    const token = this._getTokenFromLocalStorage()
    return !!token && !this.isTokenExpired(token)
  }

  // Tokens are only valid for a certain period of time, determined by the server.
  // When the one used by the React application, another one needs to be fetched.
  isTokenExpired(token){
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000){
        return true;
      }
      else {
        return false;
      }
    }
    catch(err){
      return false;
    }
  }

  //Removes token
  logout(){
    localStorage.removeItem('id_token');
  }

  getUserId(){
    const token = decode(this._getTokenFromLocalStorage());
    return token.sub;
  }

  // Enhance the standard version of fetch() by
  // adding the authentication headers into every request
  fetch(url, options){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer' + this._getTokenFromLocalStorage();
    }
    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus.bind(this))
    // .then(this._captureToken.bind(this))
    .then(res => {
      let token = res.headers.get('Authorization')
			let parsed = token.split(' ')[1]
			this._setTokenInLocalStorage(parsed)
      return res.json()
    })
  }

  _checkStatus(res){
    if(res.status >= 200 && res.status < 300){
      console.log("SUCCESS");
      return res;
    } else {
      var error = new Error(res.statusText)
      error.res = res;
      throw error;
    }
    return res;
  }

  // _captureToken(res){
  //   let header = res.headers.get("Authorization");
  //   if(header){
  //     let parsed = header.split(' ')[1];
  //     this._setTokenInLocalStorage(parsed);
  //   }
  //   return res;
  // }

  //The token is stored in the browser
  _setTokenInLocalStorage(idToken){
    return localStorage.setItem('id_token', idToken);
  }

  //Fetch the token from localStorage
  _getTokenFromLocalStorage(){
    return localStorage.getItem('id_token');
  }

}

