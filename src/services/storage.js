export function saveItem(key, value) {
  return localStorage.setItem(key, value);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}
