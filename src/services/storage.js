export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function loadItem(key) {
  return localStorage.getItem(key);
}

export function deleteItem(key) {
  localStorage.removeItem(key);
}
