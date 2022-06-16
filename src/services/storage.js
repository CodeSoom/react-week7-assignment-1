export function saveItem(key, value) {
  return localStorage.getItem(key, value);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}
