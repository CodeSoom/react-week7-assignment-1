export default function RestaurantReviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return (
      <p>
        첫 리뷰를 남겨주세요!
      </p>
    );
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {sortedReviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <br />
            {score}
            점
            <br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
