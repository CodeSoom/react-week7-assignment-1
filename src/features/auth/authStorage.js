export function saveToken(token) {
  return localStorage.setItem('accessToken', token);
}

export async function loadToken() {
  return localStorage.getItem('accessToken');
}

export async function removeToken() {
  return localStorage.removeItem('accessToken');
}
