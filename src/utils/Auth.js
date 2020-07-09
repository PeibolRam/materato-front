const TOKEN_KEY = process.env.REACT_APP_LOCALTOKEN;
const USER_INFO = 'USER_INFO';

export function setUserInfo(data) {
    localStorage.setItem(USER_INFO, data);
}

export function getUserInfo() {
  return localStorage.getItem(USER_INFO);
}

export function deleteUserInfo() {
  localStorage.removeItem(USER_INFO);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload()
}
