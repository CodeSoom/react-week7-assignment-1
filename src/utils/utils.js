export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function get(key) {
  return (obj) => obj[key];
}
