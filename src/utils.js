export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
