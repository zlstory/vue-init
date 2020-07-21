// import Cookies from "js-cookie";
// const TokenKey = "pcToken";

export function getToken() {
  //   return Cookies.get(TokenKey);
  return localStorage.getItem('pcToken')
}

export function setToken(token) {
  //   return Cookies.set(TokenKey, token, { expires: 0.5 });
  return localStorage.setItem('pcToken', token)
}

export function removeToken() {
  localStorage.removeItem('pcToken')
  //   Cookies.remove(TokenKey);
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem('pcUserInfo'))
}

export function setUserInfo(userInfo) {
  return localStorage.setItem('pcUserInfo', JSON.stringify(userInfo))
}

export function removeUserInfo() {
  localStorage.removeItem('pcUserInfo')
}
