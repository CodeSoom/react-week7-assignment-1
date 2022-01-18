export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function tenOfRecentReviews(reviews) {
  const sortedRieviews = [...reviews].sort(
    (a, b) => (b.id - a.id),
  );
  const tenOftheReviews = sortedRieviews.slice(0, 10);

  return tenOftheReviews;
}
