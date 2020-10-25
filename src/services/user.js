import Cookies from 'js-cookie'
const key = 'token'

function logOut() {
  Cookies.remove(key)
}

function logIn(token) {
  Cookies.set(key, token)
}

function getToken() {
  return Cookies.get(key)
}

function isLogin() {
  return !!getToken()
}

export default {
  logOut,
  logIn,
  getToken,
  isLogin,
}
