export function saveItem({ key, value }) {
  return localStorage.setItem(key, value);
}

export function loadItem({ key, value }) {
  return localStorage.getItem(key, value);
}

export function deleteItem({ key }) {
  return localStorage.removeItem(key);
}
