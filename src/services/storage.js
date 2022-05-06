function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

function clear() {
  localStorage.clear();
}

export { setItem, getItem, clear };
