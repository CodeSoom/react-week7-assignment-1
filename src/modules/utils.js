export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function reviewsTo10(reviews) {
  const slicedReviews = reviews.slice(-10);
  const sortedReviewsComparedWithIds = slicedReviews.sort(
    (a, b) => (b.id - a.id),
  );
  return sortedReviewsComparedWithIds;
}
