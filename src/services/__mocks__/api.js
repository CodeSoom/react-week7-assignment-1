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
    throw new Error('E-mail, Password를 확인해주세요.');
  }

  return 'ACCESS_TOKEN';
}

export async function postReview() {
  return { ok: true };
}
