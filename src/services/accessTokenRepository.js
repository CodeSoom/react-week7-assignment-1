const ACCESS_TOKEN_KEY = 'accessToken';

export function saveToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function deleteToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
