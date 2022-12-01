export function saveItem(key, value) {
  return localStorage.setItem(key, value);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}

export function deleteItem(key) {
  return localStorage.removeItem(key);
}
