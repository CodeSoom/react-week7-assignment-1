export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function loadItem(key) {
  const item = localStorage.getItem(key);

  if (item === 'undefined') {
    return undefined;
  }

  return item;
}
