export function saveItem(key, value) {
  localStorage.saveItem(key, value);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}
