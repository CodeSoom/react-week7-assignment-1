export function loadItem(key) {
  return localStorage.getItem(key);
}

export function saveItem(key, value) {
  return localStorage.setItem(key, value);
}
