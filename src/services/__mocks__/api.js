export async function fetchRegions() {
  return [];
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant() {
  return {};
}

export async function postLogin({ email, password }) {
  const EMAIL = 'tester@example.com';
  const PASSWORD = 'test';

  if (!(EMAIL === email && PASSWORD === password)) {
    return undefined;
  }

  return 'ACCESS_TOKEN';
}
