export function saveItems(key, value) {
  return localStorage.setItem(key, value);
}

export function loadItems(key) {
  return localStorage.getItem(key);
}
