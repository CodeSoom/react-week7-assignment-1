function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

export { saveItem, getItem };
