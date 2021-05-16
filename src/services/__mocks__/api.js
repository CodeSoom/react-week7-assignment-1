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
  return {
    reviews: [],
  };
}

export async function postLogin({ email, password }) {
  if (email !== 'tester@example.com' && password !== 'test') {
    return null;
  }

  return {
    accessToken: 'tddtddtdd',
  };
}

export async function postReview() {
  return {};
}
