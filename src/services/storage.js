export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function loadItem(key) {
  localStorage.getItem(key);
}
