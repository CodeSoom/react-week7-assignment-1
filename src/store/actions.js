export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function setReviews(reviews) {
  return {
    type: 'setReviews',
    payload: { reviews },
  };
}

export function setRestaurant(restaurant) {
  return {
    type: 'setRestaurant',
    payload: { restaurant },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function clearLoginFields() {
  return {
    type: 'clearLoginFields',
  };
}

export function changeReviewField({ name, value }) {
  return {
    type: 'changeReviewField',
    payload: { name, value },
  };
}

export function clearReviewFields() {
  return {
    type: 'clearReviewFields',
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function setLoginError(loginError) {
  return {
    type: 'setLoginError',
    payload: { loginError },
  };
}
